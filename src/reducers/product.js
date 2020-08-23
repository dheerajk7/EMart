import { UPDATE_CART, UPDATE_PRODUCT } from '../actions/actionTypes';

// loading reducer intial state to maintain message and error
const initialState = {
  products: [],
  cart: [],
  cartItemCount: 0,
};

// changing store on the basis of different actions for setting alerts
export default function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCT: {
      return { ...state, products: action.product };
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: action.cart,
        cartItemCount: action.itemCount,
      };
    }
    default:
      return state;
  }
}
