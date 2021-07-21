import React, { createContext, useState, useEffect, useContext } from "react";
import { FiHeart } from "react-icons/fi";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";

export const userContext = createContext();
const WishButton = ({ title }) => {
  const { wishItems, addToWish, removeItemWish } = useContext(CartContext);
  const [heartClick, setHeartClick] = useState(false);

  const callToMakeYourHeart = () => {
    setHeartClick(!heartClick);
    const isItemInCart = wishItems.filter(
      (itemInCart) => itemInCart.title === title
    );
    console.log("am i in cart", isItemInCart);
    const dataProduct = data.filter((dat) => dat.title === title);
    if (isItemInCart.length === 1) {
      removeItemWish(dataProduct[0]);
    } else {
      addToWish(dataProduct[0]);
    }
  };
  let renderHeart;

  useEffect(() => {
    const countMeIn = wishItems.filter((it) => it.title === title);
    console.log(countMeIn);
    if (countMeIn.length === 1) {
      setHeartClick(true);
    }
  });

  if (heartClick === false) {
    renderHeart = "heartisempty";
  } else {
    renderHeart = "heartisfull";
  }

  return (
    <FiHeart
      onClick={() => callToMakeYourHeart(title)}
      className={renderHeart}
    />
  );
};

export default WishButton;
