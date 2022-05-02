import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ detail }){
  const [textDetail, setTextDetail] = useState("Cargando detalle...");

  useEffect(() => {
    const getDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(detail);
      }, 4000);
    });
    getDetail.then((res) => {
      setTextDetail(res);
      console.log("despues  ",textDetail);
      console.log("res  ",res);
    });
    return () => {};
  }, [textDetail]);
  return ItemDetail( {textDetail: textDetail});
};

export default ItemDetailContainer;
