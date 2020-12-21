import React from "react";
import { connect } from "react-redux";
import styles from "./Cart.module.css";
///
import CartItem from "./cartItem/CartItem";

const Cart = ({ cart }) => {
  const [cartTotalAmount, setCartTotalAmount] = React.useState(0);
  const [cartTotalItems, setCartTotalItems] = React.useState(0);

  React.useEffect(() => {
    let totalItems = 0;
    let totalAmount = 0;
    cart.map((item) => {
      totalItems += item.qty;
      totalAmount += item.price * item.qty;
      return null;
    });
    setCartTotalItems(totalItems);
    setCartTotalAmount(totalAmount);
    // return () => { }
  }, [
    cart,
    cartTotalAmount,
    cartTotalItems,
    setCartTotalItems,
    setCartTotalAmount,
  ]);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({cartTotalItems} items)</span>
          <span>$ {cartTotalAmount}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
