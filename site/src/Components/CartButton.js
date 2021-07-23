import React, { createContext, useState, useEffect, useContext } from "react";
import CartContext from "../Context/Cart/CartContext";

export const userContext = createContext();
const CartButton = ({ title }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [cartClick, setCartClick] = useState("ADD TO CART");

  const callToMakeYourCart = () => {
    const isItemInCart = cartItems.filter((itemInCart) => itemInCart === title);
    console.log("am i in cart", isItemInCart);
    if (isItemInCart.length === 1) {
      return;
    } else {
      setCartClick("ADDED TO CART");
      addToCart(title);
    }
  };
  let renderHeart;

  useEffect(() => {
    const countMeIn = cartItems.filter((it) => it.title === title);
    console.log(countMeIn);
    if (countMeIn.length === 1) {
      setCartClick("ADDED TO CART");
    }
  });

  return (
    <div
      onClick={() => {
        callToMakeYourCart();
      }}
      style={{
        width: "250px",
        height: "40px",

        background: "#8DA1B9",
        marginLeft: "20px",
        color: "white",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      {cartClick}
    </div>
  );
};

export default CartButton;
