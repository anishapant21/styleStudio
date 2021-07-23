import React, { useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import "../style/CheckoutList.css";
import { FcMinus } from "react-icons/fc";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import CartContext from "../Context/Cart/CartContext";

const CheckoutList = ({ id, title, img, price, quantity }) => {
  const { removeItemCart, increment, decrement } = useContext(CartContext);
  const callDeleteItem = () => {
    removeItemCart(title);
  };

  return (
    <>
      <Box>
        <div className="product-info">
          <div>
            <Image
              className="iamge-image"
              borderRadius="full"
              boxSize="100px"
              src={img}
              alt="Segun Adebayo"
            />
          </div>
          <div className="title-info">{title}</div>
          <div className="icon-plus-minus">
            <div onClick={() => decrement(title)} className="icon-minus">
              <FcMinus />
            </div>

            <div className="quantity-box">
              <input
                className="input-box"
                type="text"
                placeholder={quantity}
                disabled
              />
            </div>
            <div onClick={() => increment(title)} className="icon-plus">
              <BsPlus />
            </div>
          </div>
          <div className="price-info">RS {price}</div>
          <div className="delete-info">
            <RiDeleteBinLine onClick={() => callDeleteItem()} />
          </div>
        </div>
      </Box>
      <br />
      <hr />
    </>
  );
};

export default CheckoutList;
