import { UPDATE_CART, UPDATE_PRODUCT } from './actionTypes';
import { loadingStart, loadingStop } from './progress';
import { APIUrls } from '../helpers';

function updateCart(cart) {
  return {
    type: UPDATE_CART,
    cart,
    itemCount: cart.length,
  };
}

function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

export function fetchProduct() {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getProducts();
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateProduct(data));
      });
    await dispatch(loadingStop());
  };
}

export function fetchCartItem() {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getCartItem();
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCart(data));
      });
    await dispatch(loadingStop());
  };
}
