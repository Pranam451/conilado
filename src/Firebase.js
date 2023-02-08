// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI8U32Eh0OMg_eLMbLSeah6NV8CDcO4Xc",
  authDomain: "menu-c9991.firebaseapp.com",
  projectId: "menu-c9991",
  storageBucket: "menu-c9991.appspot.com",
  messagingSenderId: "745206976106",
  appId: "1:745206976106:web:a63ad26ba24321a8280413",
  measurementId: "G-9BC4JQ2HM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
