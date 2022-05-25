import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../service/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { itemDetails } = require("../../db/details.js");
  const { items } = require("../../db/items.js");

  const getItem = () => {
    const item = doc(db, "products", id);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setDetail({ id: snapshot.id, ...snapshot.data() });
      }
    });
  };

  useEffect(() => {
    getItem();
    return () => {};
  });

  return ItemDetail(detail);
}

export default ItemDetailContainer;
