import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const onAddFn = () => console.log("onAdd test");
  const itemData = [
    {
      title: "Bicicleta Aro 29",
      image: "fenixaro29.jpg",
      price: 22000,
      initial: 3,
      stock: 6,
      onAdd: onAddFn,
    },
    {
      title: "Moto Yamaha",
      image: "yamahamoto.jpg",
      price: 522000,
      initial: 2,
      stock: 5,
      onAdd: onAddFn,
    },
    {
      title: "Auto BMW Ces2018",
      image: "bmwces2018auto.jpg",
      price: 692000,
      initial: 0,
      stock: 2,
      onAdd: onAddFn,
    },
  ];

  const [itemCardData,setItemCardData] = useState([]);

  useEffect(() => {
    const loadData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemData);
      }, 2000);
    });
    loadData
      .then((res) => setItemCardData(res))
      .catch((err) => console.log("Error: ", err));
    return () => {};
  }, []);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList data={itemCardData} />
    </div>
  );
}

export default ItemListContainer;
