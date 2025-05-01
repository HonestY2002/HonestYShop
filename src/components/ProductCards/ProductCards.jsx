import React from "react";
import classes from "./ProductCards.module.css";

function ProductCards({ product }) {
  const { name, price, image, description, quantity } = product;

  return (
    <button className={classes.cards}>
      <div className={classes.prices}>{price}</div>
      <div>
        <div className={classes.names}>
          <div className={classes.nameVision}>{name}</div>
        </div>
        <div className={classes.quantity}>{quantity}</div>
      </div>
      <img className={classes.images} src={image} alt="Картинка карточки" />
    </button>
  );
}

export default ProductCards;
