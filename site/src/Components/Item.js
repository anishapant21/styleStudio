import React, { useState, createContext, useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import "../style/Item.css";
import { useHistory } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";
import WishButton from "./WishButton";

export const UserContext = createContext();

const Item = ({ img, title, price, id }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const [cartButton, setCartButton] = useState("Add to Cart");
  const rupee = `RS ${price}`;
  const history = useHistory();
  const clickDetail = (e) => {
    history.push({
      pathname: "/productdetail",
      state: { productName: e },
    });
  };

  const callAddToCart = (title) => {
    setCartButton("Added");
    const dataProductCart = data.filter((dat) => dat.title === title);
    if (cartButton === "Add to Cart") {
      addToCart(dataProductCart[0]);
    }
  };

  useEffect(() => {
    const countMeInCart = cartItems.filter((ite) => ite.title === title);
    if (countMeInCart.length === 1) {
      setCartButton("Added");
    }
  }, [cartItems, title]);

  return (
    <>
      <Box className="boxme">
        <div className="card">
          <img className="imagemeHere" src={img} alt={title} />
          <div className="info">
            <button
              onClick={() => {
                callAddToCart(title);
              }}
              className="cartButton"
            >
              {cartButton}
            </button>
            <button
              onClick={() => {
                clickDetail(title);
              }}
              className="cartButton"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="contentMet">
          <div>
            <div className="price">{rupee}</div>
            <div className="name">{title}</div>
          </div>
          <div>
            <WishButton key={id} title={title} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Item;
