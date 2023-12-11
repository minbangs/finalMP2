import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "../styles/add-products.css";

const AddProducts = () => {
  const [enterName, setEnterName] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const AddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    //add to database//

    const storage = getStorage();
    const docRef = await collection(db, "products");

    try {
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          toast.error("images not uploaded");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterName,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });

            toast.success("Product added successfully");
            navigate("/dashboard/all-products");
          });
        }
      );
    } catch (err) {
      setLoading(false);
      toast.error("product error");
    }
  };

  return (
    <section>
      <Container id="cont__add-prod">
        <Row>
          <Col lg="12">
            {loading ? (
              <Col lg="12">
                <span className="d-flex align-items-center justify-content-center">
                  <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="black"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </span>
              </Col>
            ) : (
              <>
                <h4 className="mb-4">Add Product</h4>
                <Form onSubmit={AddProduct}>
                  <FormGroup className="form__group">
                    <span>Product Name</span>
                    <input
                      type="text"
                      placeholder="Product name....."
                      value={enterName}
                      onChange={(e) => setEnterName(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="Short description......"
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Description....."
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        type="number"
                        placeholder="Price...."
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option>Select Category</option>
                        <option value="jacket">Jacket</option>
                        <option value="cargo">Cargo</option>
                        <option value="relaxed set">Relaxed Set</option>
                        <option value="legacy">Legacy</option>
                        <option value="accessories">Accessories</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group">
                      <span>Product Image</span>
                      <input
                        type="file"
                        required
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                      />
                    </FormGroup>
                  </div>

                  <button className="shop__btn add__btn" type="submit">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
