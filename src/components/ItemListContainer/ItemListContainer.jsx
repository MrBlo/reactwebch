import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import useFirebase from "../../hooks/useFirebase";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { id } = useParams();
  const { fetchGetDataCollection } = useFirebase();
  const { itemsData, loading } = fetchGetDataCollection(id);

  return (
    <div className="ItemListContainer mt-5 mx-auto w-75">
      {loading ? (
        <h3 className="text-center">Cargando productos </h3>
      ) : (
        <ItemList data={itemsData} />
      )}
    </div>
  );
}

export default ItemListContainer;
