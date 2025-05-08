import React from 'react';
import classes from "./Modal.module.css";

const Modal = ({ open, setOpen, product }) => {
  if (!open) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <h2 className={classes.name}>{product.name}</h2>
        <img className={classes.img} src={product.image} alt={product.name} />
        <p className={classes.price}>Цена: {product.price}</p>
        <p>Описание: {product.description}</p>
        <p>Количество: {product.quantity}</p>
        <button onClick={() => setOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;