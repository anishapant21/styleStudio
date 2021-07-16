import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";
import FilterMenu from "./FilterMenu";

const WishList = () => {
  const [dataTosendAgain, setDataToSendAgain] = useState([{}]);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems.length);

  let newData = [];
  useEffect(() => {
    console.log("i was here");
    for (let i = 0; i < cartItems.length; i++) {
      console.log(cartItems[i]);
      newData.push(data.filter((dat) => dat.title === cartItems[i]));
    }
    setDataToSendAgain(newData);
  }, []);
  console.log("i am data to send again", dataTosendAgain);

  console.log("I am the boss", newData);

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
      }}
    >
      <Navbar />
      <FilterMenu items={dataTosendAgain} />

      <Footer />
    </div>
  );
};

export default WishList;
