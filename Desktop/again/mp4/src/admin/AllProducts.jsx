import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { ThreeDots } from "react-loader-spinner";
import { db } from "../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import '../styles/all-products.css'

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted");
  };

  return (
    <section>
      <Container id="all_cont">
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">All Products</h4>
          </Col>
          <Col lg="12">
            <table className="table" id="prod__table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
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
                ) : (
                  productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td id="prod--name">{item.productName}</td>
                      <td id="prod--cate">{item.category}</td>
                      <td id="prod--price">{item.price}</td>
                      <td id="act-btn">
                        <button
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
