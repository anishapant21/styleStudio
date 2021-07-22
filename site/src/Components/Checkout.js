import React, { useState, createContext, useContext, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CartContext from "../Context/Cart/CartContext";
import data from "../Data/data.js";
import CheckoutList from "./CheckoutList";
import Item from "./Item";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Scrollbars } from "react-custom-scrollbars-2";
const Checkout = () => {
  const { cartItems, addToCart, removeItemCart, clearCart } =
    useContext(CartContext);

  const renderme = cartItems.map((dat) => {
    console.log("I am here");
    const { id, title, img, price, quantity } = dat;
    console.log(title);
    return (
      <CheckoutList
        key={id}
        title={title}
        img={img}
        price={price}
        quantity={quantity}
      />
    );
  });

  let renderCartHere;
  if (cartItems.length != 0) {
    renderCartHere = (
      <div style={{ paddingTop: "200px", paddingLeft: "300px" }}>
        <h1>Shopping Cart</h1>

        <div
          style={{
            width: "80%",
            height: "500px",
          }}
        >
          <Scrollbars>
            <Box bg="white" color="black">
              <div
                style={{
                  borderRadius: "25px",
                }}
              >
                <SimpleGrid columns={1}>{renderme}</SimpleGrid>
              </div>
            </Box>
          </Scrollbars>
          <div style={{ marginLeft: "1100px", marginTop: "20px" }}>
            TOTAL : RS 22000
          </div>
          <button onClick={clearCart}>
            <Box
              as="button"
              borderRadius="md"
              bg="red"
              color="white"
              px={4}
              h={8}
            >
              Clear All
            </Box>
          </button>
          <button style={{ marginLeft: "1110px" }}>
            <Box
              as="button"
              borderRadius="md"
              bg="tomato"
              color="white"
              px={4}
              h={8}
            >
              Checkout
            </Box>
          </button>
        </div>
      </div>
    );
  } else {
    renderCartHere = (
      <div style={{ marginTop: "400px", marginLeft: "850px" }}>
        Oops, your cart is empty
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
      }}
    >
      <Navbar />
      {renderCartHere}

      <Footer />
    </div>
  );
};

export default Checkout;
