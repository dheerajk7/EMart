import { UPDATE_CART, UPDATE_PRODUCT } from './actionTypes';
import { loadingStart, loadingStop } from './progress';
import { APIUrls } from '../helpers';
import { setMessage } from './alert';

// updating product in cart in store
function updateCart(cart) {
  return {
    type: UPDATE_CART,
    cart,
    itemCount: cart.length,
  };
}

// updating product in store
function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

// getting product from API
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

// getting cart Item from API
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

// adding product to the API
export function addProduct(product) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.getProducts();
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMessage('Successful', 'Product Added'));
        dispatch(fetchProduct());
      });
    await dispatch(loadingStop());
  };
}

// deleting product from API
export function deleteProduct(id) {
  return async (dispatch) => {
    await dispatch(loadingStart());
    const url = APIUrls.deleteProductUrl(id);
    await fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProduct());
      });
    await dispatch(loadingStop());
  };
}
