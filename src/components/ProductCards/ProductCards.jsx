import React, { useState } from "react";
import classes from "./ProductCards.module.css";
import Modal from "../Modal/Modal";

function ProductCards({ product }) {
  const [ open, setOpen ] = useState(false)
  const { name, price, image, description, quantity } = product;

  return (
    <div>
      <button onClick={() => setOpen(true)} className={classes.cards}>
        <div className={classes.prices}>{price}</div>
        <div>
          <div className={classes.names}>
            <div className={classes.nameVision}>{name}</div>
          </div>
          <div className={classes.quantity}>{quantity}</div>
        </div>
        <img className={classes.images} src={image} alt="Картинка карточки" />
      </button>
      {open && <Modal open={open} setOpen={setOpen} product={product} />}
    </div>
  );
}

export default ProductCards;
