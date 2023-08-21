import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD4el47dRuDGxWEcMlDMNs8P_4j3DOFnA",
  authDomain: "solar360-4b290.firebaseapp.com",
  databaseURL: "https://solar360-4b290-default-rtdb.firebaseio.com",
  projectId: "solar360-4b290",
  storageBucket: "solar360-4b290.appspot.com",
  messagingSenderId: "270146040417",
  appId: "1:270146040417:web:c98c78b2819bf9797fb020",
  measurementId: "G-QWBE1QRF5Z",
  databaseURL: "https://solar360-4b290-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
