import { Container } from "react-bootstrap";
import React, { useRef, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./header.css";
import logo from "../../assets/images/res-logo.png";

import { cartUiActions } from "../store/shopping-cart/cartUiSlice";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },

  {
    display: "Foods",
    path: "/foods",
  },

  {
    display: "Cart",
    path: "/cart",
  },

  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      headerRef.current.classList.add("header__shrink");
    });
  }, []);

  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(false);
  const toogleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* // ! ======= logo ======= */}
          <div className="logo">
            <img src={logo} alt="..." />
            <h5>Tasty Treat</h5>
          </div>

          {/* // !  ======= menu ======= */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={toogleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* // ! ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            {/* // ? Cart Icon */}
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            {/* // ? User Icon */}
            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            {/* // ? Mobile Menu Icon */}
            <span className="mobile__menu" onClick={toogleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
