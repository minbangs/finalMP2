import React from 'react'
import { Container, Row, Col } from "reactstrap";
import aboutphoto from '../components/ProductImages/HERO_BANNER_3.webp'
import '../styles/about.css'
import about from '../components/ProductImages/about.bmp'

const AboutUs = () => {
  return (
    <section className='aboutus'>
      <div className='separator'>
        <div className='upper-left'>
          <h5>Our Story</h5>
          <h2>A Filipino Luxury <br /> Streetwear Brand</h2>
        </div>
        <div className='lower-right'>
          <h3></h3>
          <h4></h4>
        </div>
        <img src={aboutphoto} alt="" />
      </div>
      <div className='mission'>
      <Container>
        <br />
        <Row>
          <Col lg="3">
            <h3>OUR MISSION</h3>
          </Col>
          <Col lg="9">
          <hr />
            <p className='desc-mission'>Our mission is to make the beauty of fashion accessible to all, reimagining fashion by leveraging our small-batch on-demand production model. This innovative, customer-driven model allows for more choice at more affordable prices while minimizing waste, by measuring customer preferences more accurately and efficiently.</p> <br />
            <img src={about} alt="" />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg="3"> 
            <h3>OUR VISION</h3>
          </Col>
          <Col lg="9">
          <hr />
            <p className='desc-vision'> Our vision is to offer every customer exactly what they want. It’s a vision we’ve worked toward since 2012 by empowering customers, creators, independent suppliers and individual entrepreneurs.</p> <br />
          </Col>
        </Row>
        <br />
      </Container>
      </div>
    </section>
  )
}

export default AboutUs