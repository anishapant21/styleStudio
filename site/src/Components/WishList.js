import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CartContext from "../Context/Cart/CartContext";
import WishMenu from "./WishMenu";

const WishList = () => {
  const { wishItems } = useContext(CartContext);

  const newDataList = wishItems;

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
      }}
    >
      <Navbar />
      <WishMenu items={newDataList} />

      <Footer />
    </div>
  );
};

export default WishList;
