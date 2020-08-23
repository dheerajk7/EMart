const API_ROOT = 'https://5f4239f2d4b4790016fd781d.mockapi.io/api/v1';

export const APIUrls = {
  getProducts: () => `${API_ROOT}/product`,
  getCartItem: () => `${API_ROOT}/cart`,
  deleteProductUrl: (id) => `${API_ROOT}/product/${id}`,
  deleteCartItemUrl: (id) => `${API_ROOT}/cart/${id}`,
  updateProductUrl: (id) => `${API_ROOT}/product/${id}`,
};
