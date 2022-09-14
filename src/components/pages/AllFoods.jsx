import React from "react";
import "../Styles/all-food.css";
import { Container, Row, Col } from "react-bootstrap";

import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/Common-section/CommonSection";
import products from "./../../assets/fake-data/products";
import ProductCard from "./../UI/Product-Card/ProductCard";

const AllFoods = () => {
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            {/* Col 1 */}
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input type="text" placeholder="I'm looking for.." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>

            {/* Col 2 */}
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {products.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
