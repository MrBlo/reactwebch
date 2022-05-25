import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import db from "../../service/firebase"
import {collection, doc,getDocs} from "firebase/firestore"

function ItemListContainer() {
  const { id } = useParams();
  const [itemCardData, setItemCardData] = useState([]);

  const getData = async () =>{
    const col = collection(db,'products');
    try{
      const data = await getDocs(col);
      let result = data.docs.map(doc => doc = {id:doc.id,...doc.data()})
      if(id){
        result = result.filter(e => e.categoryId.id==id);
      }
      setItemCardData(result)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemList data={itemCardData} />
    </div>
  );
}

export default ItemListContainer;
