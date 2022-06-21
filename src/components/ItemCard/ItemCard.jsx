import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext/CartContext";
import Swal from "sweetalert2";
import "./ItemCard.css";

function ItemCard({ title, image, price, id, stock, detail }) {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);
  const { addItem, getCount } = useContext(CartContext);

  const onAdd = () => {
    if (count == 0 || getCount(id) + count > stock) {
      Swal.fire({
        title: "Oops...",
        text: "No hay stock suficiente(revise su carro)",
        icon: "error",
      });
      return;
    }
    addItem({ title, image, detail, id, price, quantity: count });
    setShowCount(false);
  };

  return (
    <div className="ItemCard dflex flex-column justify-content-between">
      <img className="ItemCard__image align-self-center" src={image} alt="" />
      <h5 className="ItemCard__title">{title}</h5>
      <p className="ItemCard__price">${price}</p>
      <div className="w-100 text-center">
        <Link to={`/item/${id}`} className="ItemCard__detail">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
