import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* // TODO::  ROW 1  */}
        <Row>
          {/* // ! Logo /////////////////////////// */}
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Food</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          {/* // ! Delivery Time /////////////////// */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* // ! Contact /////////////////// */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Alexandria 12 st somoha</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 0123456789</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* // ! Newsletter /////////////////// */}
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        {/* // TODO::  ROW 2  Copyright  */}
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Muhibur Rahman. All Rights
              Reserved.
            </p>
          </Col>

          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/">
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://github.com/">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                <Link to=" https://www.youtube.com/c/">
                  <i class="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to=" https://www.linkedin.com/">
                  <i class="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
