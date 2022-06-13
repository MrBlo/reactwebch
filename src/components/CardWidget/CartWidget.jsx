import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import "./CartWidget.css";

function CartWidget({ value }) {
  const { countItems } = useContext(CartContext);
  useEffect(() => {}, [countItems]);

  return (
    <div className="CartWidget">
      <img
        className="CartWidget__image"
        src="/assets/img/cart.png"
        alt="Cart"
      />
      <p className="CartWidget__counter">{countItems}</p>
    </div>
  );
}

export default CartWidget;
