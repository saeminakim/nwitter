import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUOirkuPM7XqVAbFXTjKc0MYg4tHZtUmo",
  authDomain: "nwitter-clone-react.firebaseapp.com",
  projectId: "nwitter-clone-react",
  storageBucket: "nwitter-clone-react.appspot.com",
  messagingSenderId: "982241142618",
  appId: "1:982241142618:web:7cf296873b8a311407f563",
};

const app = initializeApp(firebaseConfig);
export default app;
