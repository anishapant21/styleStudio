import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";
import FilterMenu from "./FilterMenu";
import WishMenu from "./WishMenu";

const WishList = () => {
  const [dataTosendAgain, setDataToSendAgain] = useState([{}]);

  const { cartItems, wishItems } = useContext(CartContext);

  // let newData = [];
  // useEffect(() => {
  //   console.log("i was here");
  //   for (let i = 0; i < wishItems.length; i++) {
  //     newData.push(data.filter((dat) => dat.title === wishItems[i]));
  //   }
  //   setDataToSendAgain(newData);
  // }, []);
  // console.log(dataTosendAgain);

  // const newDataList = [];
  // for (let i = 0; i < dataTosendAgain.length; i++) {
  //   newDataList.push(dataTosendAgain[i][0]);
  // }
  // console.log("I am new baby", newDataList);

  const newDataList = wishItems;
  console.log("I am new data list", newDataList);

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
