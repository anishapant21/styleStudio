import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "../style/CheckoutList.css";
import { FcMinus, FcPlus } from "react-icons/fc";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

const CheckoutList = ({ id, title, img, price }) => {
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
            <div className="icon-minus">
              <FcMinus />
            </div>

            <div className="quantity-box">
              <input
                className="input-box"
                type="text"
                placeholder="3"
                disabled
              />
            </div>
            <div className="icon-plus">
              <BsPlus />
            </div>
          </div>
          <div className="price-info">RS {price}</div>
          <div className="delete-info">
            <RiDeleteBinLine />
          </div>
        </div>
      </Box>
      <br />
      <hr />
    </>
  );
};

export default CheckoutList;
