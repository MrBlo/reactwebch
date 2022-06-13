import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../service/firebase";

const useFirebase = () => {
  const fetchGetDataCollection = (id) => {
    const [items, setItems] = useState({ itemsData: [], loading: true });
    const col = collection(db, "products");
    let result = [];

    useEffect(() => {
      getDocs(col).then((items) => {
        result = items.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
        if (id) result = result.filter((e) => e.categoryId.id == id);
        setItems({ itemsData: result, loading: false });
      });
    }, [id]);
    return items;
  };

  const fetchGetIndividualProduct = (id) => {
    const [item, setItem] = useState({ itemData: {}, loading: true });
    useEffect(() => {
      const document = doc(db, "products", id);
      getDoc(document).then((response) => {
        let result = response.data();
        result = { id: response.id, ...result };
        setItem({ itemData: result, loading: false });
      });
    }, [id]);
    return item;
  };

  const fetchGenerateTicket = async ({ data }) => {
    try {
      const col = collection(db, "orders");
      const order = await addDoc(col, data);
      return order.id;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket,
  };
};

export default useFirebase;
