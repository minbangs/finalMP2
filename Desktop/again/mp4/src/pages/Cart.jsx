import React, { useEffect } from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import {
  decreaseCart,
  getTotal,
  increaseCart,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../assets/images/emptyCart.png";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section id="empty-sect">
        {cart.cartItems.length === 0 ? (
          <Container id="cart__cont">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
              <Row>
                <Col lg="3">
                  <div className="empty-img">
                    <img
                      className="w-80 rounded-lg p-4 mx-auto"
                      src={emptyCart}
                      alt="emptyCart"
                    />
                  </div>
                </Col>
                <Col lg="9" id="cart--empty">
                  <div className="max-w-500 p-4 bg-white flex align-items-center rounded-md shadow-lg">
                    <h1 className="font-titleFont text-xl font-bold uppercase">
                      Your Cart feels lonely.
                    </h1>
                    <p className="text-sm px-10 -mt-2">
                      Your Shopping cart lives to serve. Give it purpose - fill
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
          <Container id="cart-w-items">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Row>
                <Col lg="9">
                  <table className="table bordered">
                    <thead id="table-head">
                      <tr id="item__name">
                        <th id="item_one">Image</th>
                        <th id="item_two">Title</th>
                        <th id="item_three">Price</th>
                        <th id="item_four">Qty</th>
                        <th id="item_five">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                </Col>
                <Col lg="3">
                  <div className="subtotal">
                    <h6 className="d-flex align-items-center justify-content-between">
                      Subtotal
                      <span className="fs-4 fw-bold">₱{totalAmount}</span>
                    </h6>
                  </div>
                  <p className="fs-6 mt-2">
                    taxes and shipping will be calculated upon checkout
                  </p>
                  <div className="checkout w-100">
                    <button className="shop__btn">
                      <Link to="/checkout">Checkout</Link>
                    </button>
                  </div>
                  <div className="continue w-100">
                    <button className="shop__btn mt-3">
                      <Link to="/shop">Continue Shopping</Link>
                    </button>
                  </div>
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
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseCart = (item) => {
    dispatch(increaseCart(item));
  };

  return (
    <tr>
      <td id="img-td">
        <img src={item.imgUrl} />
      </td>
      <td id="prod-name">{item.productName}</td>
      <td id="prod-price">₱{item.price * item.cartQuantity}</td>
      <td>
        <span className="item__quantity">
          <button id="minus-button" onClick={() => handleDecreaseCart(item)}> - </button>
          <div className="quantity">{item.cartQuantity}</div>
          <button id="plus-button" onClick={() => handleIncreaseCart(item)}> + </button>
        </span>
      </td>
      <td>
        <i
          onClick={() => handleRemoveFromCart(item)}
          class="ri-delete-bin-line"
        />
      </td>
    </tr>
  );
};

export default Cart;
