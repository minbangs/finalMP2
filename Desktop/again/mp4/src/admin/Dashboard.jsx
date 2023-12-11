import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../styles/dashboard.css'
import AllProducts from "./AllProducts";

import useGetData from '../custom-hooks/useGetData'
import { Users } from "./Users";

const Dashboard = () => {

  const { data: products } = useGetData('products')
  const { data: users } = useGetData('users')
  return (
    <>
      <section>
        <Container id="dash">
          <Row id="dashboard_box">
            <Col lg='3'>
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>₱90000</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="order__box">
                <h5>Total Orders</h5>
                <span>61</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="products__box">
                <h5>Total Products</h5>
                <span>{products.length}</span>
              </div>
            </Col>
            <Col lg='3'>
              <div className="users__box">
                <h5>Total Users</h5>
                <span>{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AllProducts/>
      <Users/>
    </>
  );
};

export default Dashboard;
