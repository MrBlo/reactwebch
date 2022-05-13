import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState({});
  const {id} = useParams();
  const {itemDetails} = require('../../db/details.js')
  const { items } = require('../../db/items.js')

  useEffect(() => {
    const getDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({...itemDetails.find(e => e.id==id),...items.find(e => e.id==id)});
      }, 500);
    });
    getDetail.then((res) => {
      setDetail(res);
    });
    return () => {};
  }, [detail]);
  
  return ItemDetail(detail);
}

export default ItemDetailContainer;
