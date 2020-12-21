import { isNull } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, fetchProductDetails } from "../../store/shop/shopActions";
//
import styles from "./Product/Product.module.css";

const ProductView = ({
  productData,
  addToCart,
  fetchProductDetails,
  match,
}) => {
  // console.log("ProductView.js::productData", productData);
  React.useEffect(() => {
    // console.log("ProductView.js::productData,match.params", productData, match.params);
    if (isNull(productData) && match.params.id) {
      fetchProductDetails(match.params.id);
    }
  });

  const ProductDetails = productData && (
    <>
      <div
        className={styles.product}
        style={{ margin: "25px auto", padding: 10 }}
      >
        <img
          className={styles.product__image}
          src={productData.image}
          alt={productData.title}
        />

        <div className={styles.product__details}>
          <p className={styles.details__title}> {productData.title} </p>
          <p className={styles.details__desc}> {productData.description} </p>
          <p className={styles.details__price}>$ {productData.price} </p>
        </div>

        <div className={styles.product__buttons}>
          <Link to={`/products`}>
            <button
              className={`${styles.buttons__btn} ${styles.buttons__view}`}
            >
              Back
            </button>
          </Link>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
            onClick={() => addToCart(productData.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className={styles.product_view__image_container}>
        <img
          src={productData.image}
          alt={productData.title}
          className={styles.product_view__image}
        />
      </div>
    </>
  );

  return ProductDetails ? ProductDetails : null;
};

const mapStateToProps = (state) => ({
  productData: state.shop.currentItem,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
