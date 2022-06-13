import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ItemList.css";

const ItemList = ({ data }) => {
  return (
    <div className="ItemList">
      {data.map((e, index) => (
        <ItemCard {...e} key={e.id} />
      ))}
    </div>
  );
};

export default ItemList;
