import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const { id } = useParams();
  const [itemCardData, setItemCardData] = useState([]);
  const { items } = require('../../db/items.js')

  useEffect(() => {
    const loadData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 500);
    });
    loadData.then((res) => {
      if(id){
        res = res.filter(e => e.categoryId==id);
      }
      setItemCardData(res)
    }).catch((err) => console.log("Error: ", err));
    return () => {};
  }, [id]);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList data={itemCardData} />
    </div>
  );
}

export default ItemListContainer;
