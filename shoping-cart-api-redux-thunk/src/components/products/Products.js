import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/shop/shopActions";
import Product from "./Product/Product";
import styles from "./Products.module.css";

const Products = ({ fetchProducts, products }) => {
  // console.log("Products.js::products", products);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.products}>
      {products.map((prod) => (
        <Product key={Math.random()} productData={prod} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
