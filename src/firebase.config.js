import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlH3FYjXEEA7gyH99pTtWJz48QOvO_mz8",
  authDomain: "chattingapp2304-aa67c.firebaseapp.com",
  projectId: "chattingapp2304-aa67c",
  storageBucket: "chattingapp2304-aa67c.appspot.com",
  messagingSenderId: "461571051029",
  appId: "1:461571051029:web:4ef228d0864ad203a4481c",
  measurementId: "G-NXVGG267WP"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


export default database