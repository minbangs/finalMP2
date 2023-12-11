import React from "react";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToWishlist } from "../../redux/slices/wishSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

  };

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));

  };
  
  return (
    <Col lg="3" md="4" className="mb-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="product__item">
          <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">
              <Link to={`/${item.id}`}>{item.productName}</Link>
            </h3>
            <span>{item.category}</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">₱{item.price}.00</span>
            <div className="nav__icons">
              <motion.span whileTap={{ scale: 1.2 }} onClick={()=> handleAddToWishlist(item)}>
                <i class="ri-heart-add-fill"></i>
              </motion.span>
              <motion.span whileTap={{ scale: 1.2 }} onClick={()=> handleAddToCart(item)}>
                <i class="ri-add-line"></i>
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};

export default ProductCard;
