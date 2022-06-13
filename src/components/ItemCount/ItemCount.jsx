import React from "react";
import "./ItemCount.css";

function ItemCount({ count, setCount, stock, onAdd }) {
  const handleAddItem = () => {
    count !== stock && setCount(count + 1);
  };
  const handleRemoveItem = () => {
    count !== 0 && setCount(count - 1);
  };

  return (
    <div className="ItemCount">
      <button className="ItemCount__button" onClick={handleRemoveItem}>
        -
      </button>
      <p className="ItemCount__counter">{count}</p>
      <button className="ItemCount__button" onClick={handleAddItem}>
        +
      </button>
      <button className="ItemCount__add fw-bold" onClick={onAdd}>
        Agregar
      </button>
    </div>
  );
}

export default ItemCount;
