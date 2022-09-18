import React, { useState } from "react";
import Helmet from "./../Helmet/Helmet";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../UI/Common-section/CommonSection";

const Checkout = () => {
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />.
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>

              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" required />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Phone number" required />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="Country" required />
                </div>

                <div className="form__group">
                  <input type="text" placeholder="City" required />
                </div>

                <div className="form__group">
                  <input type="number" placeholder="Postal code" required />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
