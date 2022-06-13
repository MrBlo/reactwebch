import React, { useContext, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import FormComponent from "../Form/FormComponent";
import "./Cart.css";

const Cart = () => {
  const { itemCart } = useContext(CartContext);
  const { getTotalPrice } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  useEffect(() => {}, [itemCart]);

  return getTotalPrice() != 0 ? (
    <div className="px-5 w-75 mt-5 mx-auto">
      <ul className="Cart__ul">
        {itemCart.map((e, index) => {
          return (
            <li
              className="d-flex justify-content-evenly mt-2 border py-5"
              key={index}
            >
              <Image className="Cart_image" src={e.image} fluid={true} />
              <div className="">
                <p className="fw-bolder">{e.title}</p>
                <p>{e.price}</p>
              </div>
              <p>Cantidad: {e.quantity}</p>
              <button
                className="Cart__button"
                onClick={() => {
                  removeItem(e.id);
                }}
              >
                Eliminar item
              </button>
            </li>
          );
        })}
      </ul>
      <FormComponent total={getTotalPrice()} compra={itemCart} />
    </div>
  ) : (
    <h2 className="text-center">
      Carrito vacio, prueba agregando algo a tu carrito
      <br />
      <Link to="/">Ver productos</Link>
    </h2>
  );
};

export default Cart;
