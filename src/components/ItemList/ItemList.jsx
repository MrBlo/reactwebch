import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './ItemList.css';

const ItemList = ({ data }) => {
  return (
    <div className="ItemList">
      {data == null || data.length === 0 ? (
        <h2>Cargando información</h2>
      ) : (
        data.map((e, index) => {
          return <ItemCard {...e} key={index} />;
        })
      )}
    </div>
  );
};

export default ItemList;
