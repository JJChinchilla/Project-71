import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCHndXixJYFCmmSDcSKE3EZQ2ogn3mUAYo",
  authDomain: "project-71-19755.firebaseapp.com",
  projectId: "project-71-19755",
  storageBucket: "project-71-19755.appspot.com",
  messagingSenderId: "37038928483",
  appId: "1:37038928483:web:f33b2d3ca5971dea463e56"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
