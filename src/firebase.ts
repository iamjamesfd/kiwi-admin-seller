import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_sAdY4jfN4BLx3TsqKYazKGgdtq0xNCk",
  authDomain: "notification-cdfdb.firebaseapp.com",
  projectId: "notification-cdfdb",
  storageBucket: "notification-cdfdb.appspot.com",
  messagingSenderId: "323761440331",
  appId: "1:323761440331:web:95cb87b935156556356fce",
  measurementId: "G-YTWFJ0BGWW",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)
export { messaging }
