import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLU-eHLG1JG4o2mO-C-MJAqHnu8szY8Sw",
  authDomain: "numidica-19b76.firebaseapp.com",
  projectId: "numidica-19b76",
  storageBucket: "numidica-19b76.appspot.com",
  messagingSenderId: "232340484695",
  appId: "1:232340484695:web:44de9e1d7c0c087b702912",
};

let app;
let db;

const initializeFirebase = () => {
  if (app == undefined) {
    app = initializeApp(firebaseConfig);
  }
  if (db == undefined) {
    db = getFirestore();
  }
};

export { initializeFirebase, app, db };
