import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFirebase from "../../hooks/useFirebase";

function ItemListContainer() {
  const { id } = useParams();
  const [itemCardData, setItemCardData] = useState([]);
  const { fetchGetDataCollection } = useFirebase();

  useEffect(() => {
    const fetchProducts = async () => {setItemCardData( await fetchGetDataCollection(id))};
    fetchProducts();
  }, [id]);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList data={itemCardData} />
    </div>
  );
}

export default ItemListContainer;
