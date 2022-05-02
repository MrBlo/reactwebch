import React from "react";
import ItemCard from "./ItemCard";

const ItemListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "16px",
    placeItems: "start start",
    placeContent: "start start"
};

const ItemList = ({ data }) => {
  return (
    <div style={ItemListStyle}>
         {(data==null || data.length == 0) ? (
        <h2>Cargando información</h2>
      ) : (
        data.map((e,index) => 
            {return <ItemCard {...e} key={index}/>}
        )
      )}
    </div>
  );
};

export default ItemList;

/*
 {(data==null || data.length == 0) ? (
        <h2>Cargando información</h2>
      ) : (
        data.map((e) => ItemCard(e))
      )}
*/