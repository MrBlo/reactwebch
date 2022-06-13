import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useFirebase from "../../hooks/useFirebase";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const { fetchGetIndividualProduct } = useFirebase();
  let { itemData, loading } = fetchGetIndividualProduct(id);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <h2 class="text-center mt-5">Cargando info</h2>
      ) : (
        <ItemDetail {...itemData} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
