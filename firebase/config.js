// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat"
 import { getAuth} from "firebase/auth";
// import {...} from "firebase/database";
 import  "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCv7A28hggXmsicljCTQ_BScK-dM7gzMM",
  authDomain: "chat-app-15484.firebaseapp.com",
  projectId: "chat-app-15484",
  storageBucket: "chat-app-15484.appspot.com",
  messagingSenderId: "1024249854374",
  appId: "1:1024249854374:web:81b0bc46dcffac42f77767"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// export {app, db ,getFirestore ,collection, addDoc,getDocs,auth}

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();
const auth =  firebase.auth();
export {db, auth};