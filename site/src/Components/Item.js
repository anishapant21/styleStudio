import React, { useState, createContext, useContext, useEffect } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import "../style/Item.css";
import { useHistory } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";
import WishButton from "./WishButton";

export const UserContext = createContext();

const Item = ({ img, title, price, id }) => {
  const { cartItems, removeItemWish, addToWish, wishItems, addToCart } =
    useContext(CartContext);

  const [heartClick, setHeartClick] = useState(false);
  const [cartButton, setCartButton] = useState("Add to Cart");
  const rupee = `RS ${price}`;
  const history = useHistory();
  const clickDetail = (e) => {
    console.log("i am baby e", e);
    history.push({
      pathname: "/productdetail",
      state: { productName: e },
    });
  };

  // const callToMakeYourHeart = () => {
  //   setHeartClick(!heartClick);
  //   const isItemInCart = wishItems.filter(
  //     (itemInCart) => itemInCart.title === title
  //   );
  //   console.log("am i in cart", isItemInCart);
  //   const dataProduct = data.filter((dat) => dat.title === title);
  //   if (isItemInCart.length === 1) {
  //     removeItemWish(dataProduct[0]);
  //   } else {
  //     addToWish(dataProduct[0]);
  //   }
  // };
  // let renderHeart;

  // useEffect(() => {
  //   const countMeIn = wishItems.filter((it) => it.title === title);
  //   console.log(countMeIn);
  //   if (countMeIn.length === 1) {
  //     setHeartClick(true);
  //   }
  // }, []);

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
  });

  // if (heartClick === false) {
  //   renderHeart = "heartisempty";
  // } else {
  //   renderHeart = "heartisfull";
  // }

  return (
    <>
      <Box className="boxme">
        <div className="card">
          <img className="imagemeHere" src={img} />
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
            <WishButton title={title} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Item;

{
  /* <FiHeart
onClick={() => callToMakeYourHeart(title)}
className={renderHeart}
/> */
}
