import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishSlice";

const ProductDetails = ({ item }) => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMessage = useRef("");
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    subImg,
    productName,
    price,
    avgRating,
    reviews,
    description,
    category,
    shortDesc,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMessage = reviewMessage.current.value;

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMessage,
      rating,
    };

    console.log(reviewObj);
    toast.success("Review submitted");
  };

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id,
        imgUrl,
        productName,
        price,
      })
    );
  };

  const handleAddToWishlist = (item) => {
    dispatch(
      addToWishlist({
        id,
        imgUrl,
        productName,
        description,
        avgRating,
        price,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" id="first-div">
              <Row id="second-div">
                <Col lg="4" className="main__img" id="first_img">
                  <img src={imgUrl} alt="" />
                </Col>
                <Col lg="4" className="main__img" id="second_img">
                  <img src={subImg} alt="" />
                </Col>
              </Row>
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-2 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#617D92",
                    color: "#fff",
                  }}
                  className="shop__btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </motion.button>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  style={{ marginLeft: "10px" }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#617D92",
                    color: "#fff",
                  }}
                  className="shop__btn"
                  onClick={() => handleAddToWishlist(item)}
                >
                  Add to Favorites
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Walter White</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Review message"
                            ref={reviewMessage}
                            required
                          />
                        </div>
                        <button type="submit" className="shop__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <div className="prod-div">
              <ProductList data={relatedProducts} />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
