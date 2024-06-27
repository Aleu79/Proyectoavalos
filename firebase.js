// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAusBKvrDnMRuwHQGP_HKzl96eTKj1kPO8",
  authDomain: "proyecto-73b20.firebaseapp.com",
  projectId: "proyecto-73b20",
  storageBucket: "proyecto-73b20.appspot.com",
  messagingSenderId: "975630169439",
  appId: "1:975630169439:web:db9073feeae761c24432ea"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
