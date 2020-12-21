import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
/// css class objs
import styles from "./Navbar.module.css";

const Navbar = ({cart}) => {
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/products">
        <h2 className={styles.navbar__logo}> Shopping Cart </h2>
      </Link>

      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{Math.round(cartCount)}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
