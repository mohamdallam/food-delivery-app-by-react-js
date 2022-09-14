import "./common-section.css";
import React from "react";
import { Container } from "react-bootstrap";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
