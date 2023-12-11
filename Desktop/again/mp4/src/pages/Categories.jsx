import React from 'react'
import { dataDigitalBestSeller } from '../assets/data/images';
import '../styles/collections.css'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import cas1 from '../components/CollectionsImages/col1.bmp'
import cas2 from '../components/CollectionsImages/col2.jpg'
import cas3 from '../components/CollectionsImages/col4.bmp'
import cas4 from '../components/CollectionsImages/col3.jpg'
import cas5 from '../components/CollectionsImages/col5.bmp'
import cas6 from '../components/CollectionsImages/col6.bmp'

function Categories() {

  return (
    <Container> 
      <Row className='top-text'>
        <Col lg-12>
          <br />
          <h2>Classic Collection</h2>
          <span>The daily outdoor outfit</span>
          <br /> <br />
          <p> A capsule that embraces Desert Neutrals with high fashion form and intricately chosen luxury materials. This world class collection is very comfortable and can be worn everywhere, everyday. </p>
          <br />
        </Col>
      </Row>
      <Row className='img-collections'>
        <Col lg-3>
          <Link to='/22'>
          <img src={cas1}></img>
          <img src={cas2}></img>
          </Link>
        </Col>
        <Col lg-6>
        <Link to='/13'>
          <img src={cas4}></img>
          <img src={cas3}></img>
          </Link>
        </Col>
        <Col lg-3>
        <Link to='/09'>
        <img src={cas5}></img>
        <img src={cas6}></img>
          </Link>
        </Col>
    </Row> <br />
  </Container>
  )
}

export default Categories