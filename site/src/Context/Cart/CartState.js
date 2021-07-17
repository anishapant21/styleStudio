import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_TO_WISH, ADD_TO_CART, REMOVE_ITEM_WISH } from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    wishItems: [],
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

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        wishItems: state.wishItems,
        addToCart,
        addToWish,
        removeItemWish,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
