import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwUtNhOJ5VYNVcm1dL_ft3F2PUkeYjq0o",
  authDomain: "apiweb-4f392.firebaseapp.com",
  projectId: "apiweb-4f392",
  storageBucket: "apiweb-4f392.firebasestorage.app",
  messagingSenderId: "103199073601",
  appId: "1:103199073601:web:ae30967015bdf6c970edc0",
  measurementId: "G-ST6RKM4T0V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;