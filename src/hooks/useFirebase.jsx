import { collection,getDocs,getDoc,doc,addDoc,updateDoc} from "firebase/firestore";
import db from "../service/firebase"

const useFirebase = () => {

  const fetchGetDataCollection = async (id) => {
    const col = collection(db,'products');
    try{
      const data = await getDocs(col);
      let result = data.docs.map(doc => doc = {id:doc.id,...doc.data()})
      if(id) result = result.filter(e => e.categoryId.id==id);
      return result;
    } catch(error){
      console.log(error)
    }
  };

  const fetchGetIndividualProduct =  async (id) => {
    try {
        const document = doc(db,"products",id)
        const response = await getDoc(document)
        let result =response.data()
        return ({id:response.id,...result})
    } catch (error) {
        console.log(error)
    }
  };

  const fetchGenerateTicket =  async ({data}) => {
    try {
        const col = collection(db,"orders")
        const order =  await addDoc(col,data)
        return order.id
    } catch (error) {
        console.log(error)
    }
  };
  /*
  const fetchUpdateDoc = async ({id}) => {
    const orderDoc = doc(db,"games",id);
    try {
      await updateDoc(orderDoc,{precio:8000})
      console.log("se actualizo correctamente")
    } catch (error) {
      console.log(error)
    }
  }
  */
  return {
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket
    //,fetchUpdateDoc
  };
};

export default useFirebase;
