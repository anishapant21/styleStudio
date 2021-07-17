import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      console.log(action.payload);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item != action.payload),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
