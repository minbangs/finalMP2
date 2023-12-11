import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup , ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tp2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className="mt-1" id='top-part'>
              <br /><h3 className="text-center fw-bold">Want to Partner with us?</h3>
              <p className="text-center">Let us know how we can help!<br/>
                  Your business is our business and your happiness are ours too!</p>
              <center><Link to="contactus" className="btn btn-dark btn-outline-white">Get Started</Link></center>
              <hr/>
          </div>
        </Row>
        <Row>
          <Col lg="4" className="mb-4" md='6' id="first-col">
            <div className="logo">
              <img src={logo} alt="Trends.PH logo" className="header__logo" />
              <div>
                <h1>TRENDS.PH</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Your online shop for luxury-quality products that is very afforadble for everyone, but not compromising the style and comfort.
            </p>
          </Col>

          <Col lg="3" md='3' className="mb-4" id="second-col">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Find us on</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0" id="social-icons">

                  <Link to="https://www.facebook.com/"><FontAwesomeIcon id="fb-icon" icon={faSquareFacebook} style={{color: "#3579ed",}} size='2xl' /></Link>

                  <Link to="https://www.instagram.com/?hl=en"><FontAwesomeIcon id="ig-icon" icon={faSquareInstagram} size='2xl' /></Link>

                  <Link to="https://www.youtube.com/"><FontAwesomeIcon id="yt-icon" icon={faSquareYoutube} size="2xl" style={{color: "#d91717",}} /></Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <div className='newsletter'>
                      <p>SIGN UP FOR NEWSLETTER</p>
                      <InputGroup className="mb-3" id='emailsubs'>
                          <Form.Control
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="basic-addon2"
                          />
                          <Button variant="outline-secondary" id="button-addon2">
                          Submit
                          </Button>
                      </InputGroup>
                      <InputGroup className="mb-3" id='vibersubs'>
                      <InputGroup.Text                               variant="outline-secondary"
                          title="PH +63"
                          id="input-text">PH +63
                      </InputGroup.Text>
                      <Form.Control
                          placeholder="Viber"
                          aria-label="Viber"
                          aria-describedby="basic-addon2"
                          />
                          <Button variant="outline-secondary" id="button-addon2">
                          Submit
                          </Button>
                      </InputGroup>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md='3' className="mb-4" id="third-col">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="aboutus">About Us</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md='4' id="fourth-col">
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact Us</h4>
              <ListGroup className="footer__contact-us">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Unit 2605 Antel Global Center Julia Vargas Avenue Ortigas 1605</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>687-9359 | 687-9112 | 687-9135</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>trends.ph@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12' id="lowest-ft">
            <p className="footer__copyright">all rights reserved ©{year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
