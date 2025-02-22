import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD86-cDZeCzT8OgDMrRXbEhELm1K4fifZI",
  authDomain: "live-chat-a3c3b.firebaseapp.com",
  projectId: "live-chat-a3c3b",
  storageBucket: "live-chat-a3c3b.firebasestorage.app",
  messagingSenderId: "190441250453",
  appId: "1:190441250453:web:15c21d7d74efdb0c54059c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
