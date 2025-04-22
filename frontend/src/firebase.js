// Firebase Client Config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVr3m_2Lyx9Z4cL89GIm-I8ZercDMwECM",
  authDomain: "banking-saas-app.firebaseapp.com",
  projectId: "banking-saas-app",
  storageBucket: "banking-saas-app.appspot.com",
  messagingSenderId: "135464159810",
  appId: "1:135464159810:web:YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

