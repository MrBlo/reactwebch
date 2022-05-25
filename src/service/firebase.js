// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk1MztrDzoINuOuvi6DWlSkCdrQ7FBL4w",
  authDomain: "reactch-baf75.firebaseapp.com",
  projectId: "reactch-baf75",
  storageBucket: "reactch-baf75.appspot.com",
  messagingSenderId: "507871329871",
  appId: "1:507871329871:web:5882dd58d3c39700a9343a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;