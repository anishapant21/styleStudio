import {
  ADD_TO_CART,
  ADD_TO_WISH,
  REMOVE_ITEM_WISH,
  REMOVE_ITEM_CART,
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
} from "../Types";

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
    case REMOVE_ITEM_CART: {
      console.log(action.payload);

      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.title != action.payload
        ),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }

    case INCREMENT: {
      let updatedCart = state.cartItems.map((curElem) => {
        if (curElem.title === action.payload) {
          return {
            ...curElem,
            quantity: curElem.quantity + 1,
          };
        }
        return curElem;
      });

      return { ...state, cartItems: updatedCart };
    }

    case DECREMENT: {
      let updatedCart = state.cartItems
        .map((curElem) => {
          if (curElem.title === action.payload) {
            return {
              ...curElem,
              quantity: curElem.quantity - 1,
            };
          }
          return curElem;
        })
        .filter((curElem) => curElem.quantity != 0);

      return { ...state, cartItems: updatedCart };
    }

    default:
      return state;
  }
};

export default CartReducer;
