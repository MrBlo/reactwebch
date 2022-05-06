import React from "react";
import "./ItemCount.css";

function ItemCount({ count, setCount, stock }) {
  return (
    <div className="ItemCount">
      <button
        className="ItemCount__button"
        onClick={() => count !== 0 && setCount(count - 1)}
      >
        -
      </button>
      <p className="ItemCount__counter">{count}</p>
      <button
        className="ItemCount__button"
        onClick={() => count !== stock && setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
