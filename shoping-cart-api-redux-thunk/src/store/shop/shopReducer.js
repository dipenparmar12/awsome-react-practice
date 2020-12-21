import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  FETCH_PRODUCTS,
} from "./shopActions";
import randomImage from "../../utils/randomImage";

const initialState = {
  products: [
    {
      id: 1,
      title: "Local product 1 2TB SSD",
      description: "Computer periprel solid state dirve for gamers and ",
      image: randomImage(),
      price: 10.0,
    },
    {
      id: 2,
      title: "Local product 2 Hp Omen i7 11th gen, 32Gb gaming laptop",
      description: "Computer periprel solid state dirve for gamers and ",
      image: randomImage("300x201"),
      price: 30.0,
    },
  ], // { id, title, description, price, image}

  cart: [], // { id, title, description, price, image, qty}
  currentItem: null, //
};

const shopReducer = (state = initialState, action) => {
  // console.log('shopReducer.js::action.payload', action.payload);
  switch (action.type) {
    ///
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };

    ///
    case ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // console.log("shopReducer.js::item", item);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      const newCart = inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }];

      return {
        ...state,
        cart: newCart,
      };

    ///
    case REMOVE_FROM_CART:
      const updatedCarts = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCarts,
      };

    ///
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    ///
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
