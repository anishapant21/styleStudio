import { ADD_TO_CART, ADD_TO_WISH, REMOVE_ITEM_WISH } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISH: {
      return {
        ...state,
        wishItems: [...state.wishItems, action.payload],
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM_WISH: {
      console.log(action.payload);
      return {
        ...state,
        wishItems: state.wishItems.filter((item) => item != action.payload),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
