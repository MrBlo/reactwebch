import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemCard.css";

function ItemCard({ title, image, price, id, initial, stock, detail }) {
  const [count, setCount] = useState(Number(initial) || 0);
  const [showCount, setShowCount] = useState(true);
  const onAdd = () =>{
    setShowCount(false)
  };
  //<img className="ItemCard__image" src={`/assets/img/${image}`} alt="" />
  return (
    <div className="ItemCard">
      <h3 className="ItemCard__title">{title}</h3>
      <p className="ItemCard__price">${price}</p>
      <img className="ItemCard__image" src={image} alt="" />
      
      {showCount ? <ItemCount count={count} setCount={setCount} stock={stock} onAdd={onAdd}/>
          : <Link className="ItemDetail__link" to="/cart">{count} Items agregado <br/> Terminar mi compra </Link>}
      

      <Link to={`/item/${id}`} className="ItemCard__detail">Ver Detalle</Link>
    </div>
  );
}

export default ItemCard;
