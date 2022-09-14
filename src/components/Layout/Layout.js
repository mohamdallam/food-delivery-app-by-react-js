import React from "react";
import { useSelector } from "react-redux";

import Routers from "./../routes/Routers";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Carts from "./../UI/Cart/Carts";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div>
      <Header />
      {showCart && <Carts />}

      <div>
        <Routers />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
