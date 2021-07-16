import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import CartState from "./Context/Cart/CartState";

ReactDOM.render(
  <CartState>
    <App />
  </CartState>,
  document.querySelector("#root")
);
