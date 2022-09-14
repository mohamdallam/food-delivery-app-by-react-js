import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import "../../Styles/shopping-cart.css";
import { cartUiActions } from "./../../store/shopping-cart/cartUiSlice";

// !!:: When Click On Cart Icon NavBar //////////////////////////////////////
const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAomunt = useSelector((state) => state.cart.totalAomunt);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item Add to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount :<span>${totalAomunt}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
