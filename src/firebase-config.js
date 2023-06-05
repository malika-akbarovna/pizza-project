import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdk26HBe5rkoYidNEQ3QX7AtAO8fcVZRs",
  authDomain: "pizza-12e79.firebaseapp.com",
  projectId: "pizza-12e79",
  storageBucket: "pizza-12e79.appspot.com",
  messagingSenderId: "527217064591",
  appId: "1:527217064591:web:782a8980811dca4bcc0efa",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
