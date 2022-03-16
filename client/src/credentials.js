// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDcMQHUNFgZO9QuRL4Jh1tRSlpf5En2nI",
  authDomain: "estaciones-de-carga-6e35b.firebaseapp.com",
  projectId: "estaciones-de-carga-6e35b",
  storageBucket: "estaciones-de-carga-6e35b.appspot.com",
  messagingSenderId: "860931095137",
  appId: "1:860931095137:web:4292b90692d695121e0820"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp