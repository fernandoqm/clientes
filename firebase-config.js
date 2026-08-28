import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFyrmt2HkG3Dsl85Nb0PSN8N3Zbj550nc",
  authDomain: "clientes-10b2f.firebaseapp.com",
  projectId: "clientes-10b2f",
  storageBucket: "clientes-10b2f.firebasestorage.app",
  messagingSenderId: "1079536447196",
  appId: "1:1079536447196:web:0b36296d8fc63e24f40e19"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
