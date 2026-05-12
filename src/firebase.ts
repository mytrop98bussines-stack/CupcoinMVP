import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxUOLLm72in2-OM30Ywrxq9-QBuYdH334",
  authDomain: "cupcoin-b2b4f.firebaseapp.com",
  projectId: "cupcoin-b2b4f",
  storageBucket: "cupcoin-b2b4f.firebasestorage.app",
  messagingSenderId: "502564207166",
  appId: "1:502564207166:web:ef81ebbebf6e390142ef6f",
  measurementId: "G-EGNMNRTPND"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios para usar en la App
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
