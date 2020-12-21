import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { adjuctQty, removeFromCart } from "../../../store/shop/shopActions";
import styles from "./CartItem.module.css";

const CartItem = ({ item, removeFromCart, adjuctQty }) => {
  const [cartQty, setCartQty] = useState(item.qty);
  console.log("CartItem.js::cartQty", cartQty);

  const handleAdjuctQty = (e) => {
    setCartQty(e.target.value);
    adjuctQty(item.id, e.target.value);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            value={cartQty}
            onChange={handleAdjuctQty}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt="Del"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjuctQty: (itemId, value) => dispatch(adjuctQty(itemId, value)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
