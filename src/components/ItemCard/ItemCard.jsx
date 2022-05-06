import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemCard.css";

function ItemCard({ title, image, price, id, initial, stock, onAdd, detail }) {
  const [count, setCount] = useState(Number(initial));
  return (
    <div className="ItemCard">
      <h3 className="ItemCard__title">{title}</h3>
      <p className="ItemCard__price">${price}</p>
      <img className="ItemCard__image" src={`/assets/img/${image}`} alt="" />
      <ItemCount count={count} setCount={setCount} stock={stock} />
      <button
        className="ItemCard__button"
        onClick={() => stock > 0 && onAdd(count)}
      >
        Agregar al Carrito
      </button>

      <Link to={`/item/${id}`} className="ItemCard__detail">Ver Detalle</Link>
    </div>
  );
}

export default ItemCard;
