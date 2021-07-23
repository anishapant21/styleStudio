import {
  ADD_TO_CART,
  ADD_TO_WISH,
  REMOVE_ITEM_WISH,
  REMOVE_ITEM_CART,
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
  GET_TOTAL,
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
      return {
        ...state,
        wishItems: state.wishItems.filter((item) => item !== action.payload),
      };
    }
    case REMOVE_ITEM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.title !== action.payload
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
        .filter((curElem) => curElem.quantity !== 0);

      return { ...state, cartItems: updatedCart };
    }

    case GET_TOTAL: {
      let { totalItem, totalAmount } = state.cartItems.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          let updatedTotalAmount = price * quantity;
          accum.totalAmount += updatedTotalAmount;
          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItem, totalAmount };
    }

    default:
      return state;
  }
};

export default CartReducer;
