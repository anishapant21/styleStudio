import React, { useState, createContext, useContext, useEffect } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import "../style/Item.css";
import { useHistory } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import CartContext from "../Context/Cart/CartContext";

export const UserContext = createContext();

const Item = ({ img, title, price, id }) => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [heartClick, setHeartClick] = useState(false);
  const rupee = `RS ${price}`;
  const history = useHistory();
  const clickDetail = (e) => {
    console.log("i am baby e", e);
    history.push({
      pathname: "/productdetail",
      state: { productName: e },
    });
  };
  const callToMakeYourHeart = () => {
    setHeartClick(!heartClick);
    addToCart(title);
  };
  let renderHeart;

  useEffect(() => {
    console.log("I came");
    const countMeIn = cartItems.filter((it) => it === title);
    console.log(countMeIn);
    if (countMeIn.length === 1) {
      console.log("mein yeha aaya tha");
      setHeartClick(true);
    }
  }, []);

  if (heartClick === false) {
    renderHeart = "heartisempty";
  } else {
    renderHeart = "heartisfull";
  }

  return (
    <>
      <Box className="boxme">
        <img
          onClick={() => {
            clickDetail(title);
          }}
          className="imagemeHere"
          src={img}
        />
        <div className="price">
          {rupee}

          <FiHeart
            onClick={() => callToMakeYourHeart(title)}
            className={renderHeart}
          />
        </div>
        <div className="name">{title}</div>
      </Box>
    </>
  );
};

export default Item;
