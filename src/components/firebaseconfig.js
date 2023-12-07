import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVSEIRduwbGq9ae9mUYiat_szuYb0TvL4",
  authDomain: "esp32-fg.firebaseapp.com",
  databaseURL: "https://esp32-fg-default-rtdb.firebaseio.com",
  projectId: "esp32-fg",
  storageBucket: "esp32-fg.appspot.com",
  messagingSenderId: "1047956866466",
  appId: "1:1047956866466:web:4a635f341021a18264defb",
  measurementId: "G-K43RXH184P",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
