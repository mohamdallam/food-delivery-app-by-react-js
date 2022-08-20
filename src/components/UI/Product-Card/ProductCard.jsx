import React from "react";
import productImg from "../../../assets/images/product_01.1.jpg";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to="#">Burger</Link>
        </h5>

        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">$600</span>
          <button className="addTOCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
