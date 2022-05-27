import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useFirebase from "../../hooks/useFirebase";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { fetchGetIndividualProduct } = useFirebase();

  useEffect(() => {
    const fetchProduct = async () => {setDetail(await fetchGetIndividualProduct(id))};
    fetchProduct();
    return () => {};
  },[]);
  return ItemDetail(detail);
}
  //

export default ItemDetailContainer;
