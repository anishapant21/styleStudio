import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_WISH,
  ADD_TO_CART,
  REMOVE_ITEM_WISH,
  REMOVE_ITEM_CART,
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    wishItems: [],
    totalItem: 0,
    totalAmount: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const addToWish = (item) => {
    dispatch({ type: ADD_TO_WISH, payload: item });
  };

  const removeItemWish = (item) => {
    dispatch({ type: REMOVE_ITEM_WISH, payload: item });
  };

  const removeItemCart = (item) => {
    dispatch({ type: REMOVE_ITEM_CART, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const increment = (title) => {
    dispatch({ type: INCREMENT, payload: title });
  };
  const decrement = (title) => {
    dispatch({ type: DECREMENT, payload: title });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        showCart: state.showCart,
        cartItems: state.cartItems,
        wishItems: state.wishItems,
        addToCart,
        addToWish,
        removeItemWish,
        removeItemCart,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
