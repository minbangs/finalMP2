import React, { useEffect } from "react";
import "../styles/cart.css";
import "../styles/favorites.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../assets/images/emptyCart.png";
import { removeFromWishlist } from "../redux/slices/wishSlice";

const Favorites = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <Helmet title="Favorites">
      <CommonSection title="Favorites" />
      <section>
        {wishlist.wishlistItems.length === 0 ? (
          <Container>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
              <Row>
                <Col lg="3">
                  <div>
                    <img
                      className="w-80 rounded-lg p-4 mx-auto"
                      src={emptyCart}
                      alt="emptyCart"
                    />
                  </div>
                </Col>
                <Col lg="9">
                  <div className="max-w-500 p-4 bg-white flex align-items-center rounded-md shadow-lg">
                    <h1 className="font-titleFont text-xl font-bold uppercase">
                      Your wish list feels lonely.
                    </h1>
                    <p className="text-sm px-10 -mt-2">
                      Your wishlist lives to serve. Give it purpose - fill
                      it with books, electronics, videos, etc. and make it
                      happy.
                    </p>
                    <Link to="/shop">
                      <button className="shop__btn">Continue Shopping</button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </Container>
        ) : (
          <Container>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Row>
                <Col lg="12">
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th id="desc">Description</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.wishlistItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </motion.div>
          </Container>
        )}
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromFavorites = (item) => {
    dispatch(removeFromWishlist(item));
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} />
      </td>
      <td id="name_item">{item.productName}</td>
      <td id="desc_item">{item.description}</td>
      <td>
        <div className="product__rating d-flex align-items-center gap-2 mb-3">
          <div>
          <p>
            (<span>{item.avgRating}</span>)
          </p>
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
        </div>
      </td>
      <td>
        <div id="item_price">
        ₱{item.price}</div>
      </td>
      <td>
        <div className="nav__icons">
          <motion.span whileTap={{ scale: 1.2 }}>
            <i class="ri-delete-bin-line" onClick={() => handleRemoveFromFavorites(item)}> </i>
          </motion.span>
          <motion.span
            whileTap={{ scale: 1.2 }}>
            <i class="ri-add-box-line" onClick={() => handleAddToCart(item)}></i>
          </motion.span>
        </div>
      </td>
    </tr>
  );
};

export default Favorites;
