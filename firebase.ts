import {initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBAGCQFPCN5esRL4_zC8TwzgT51oWFfJC4",
    authDomain: "mindmesh-c4a00.firebaseapp.com",
    projectId: "mindmesh-c4a00",
    storageBucket: "mindmesh-c4a00.firebasestorage.app",
    messagingSenderId: "474193569030",
    appId: "1:474193569030:web:1e174e8e7872af6434aa87",
    measurementId: "G-SRCWPH18F5"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export{db};
