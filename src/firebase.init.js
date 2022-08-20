import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWKXzH3Bj7SGFvbzjaMG2NRfL9c0TT9zI",
  authDomain: "our-courses-132f5.firebaseapp.com",
  projectId: "our-courses-132f5",
  storageBucket: "our-courses-132f5.appspot.com",
  messagingSenderId: "421749148358",
  appId: "1:421749148358:web:be6d8fffd141ac003165c7",
  measurementId: "G-GY3F1Q524Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
