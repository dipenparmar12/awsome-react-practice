import Axios from "axios";
import API from "../../config/api";

/////// SHOP ACTION TYPES

///
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

/// fetch data from API
export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${API}/products`);
    // console.log("shopActions.js::res", res);
    dispatch(getProductsAction(res.data));
  } catch (error) {
    console.log("shopActions.js::error", error);
    return undefined;
  }
};

/// fetch data from API
export const fetchProductDetails = (productId) => async (dispatch) => {
  try {
    const res = await Axios.get(`${API}/products/${productId}`);
    dispatch(loadCurrentItem(res.data));
  } catch (error) {
    console.log("shopActions.js::error", error);
    return undefined;
  }
};

/////// Actions (events, emmit etc)
///
export const getProductsAction = (products) => ({
  type: FETCH_PRODUCTS,
  payload: {
    products,
  },
});

///
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjuctQty = (itemId, value) => {
  // console.log('shopActions.js::itemId', itemId);
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
