import { getAuth } from "firebase/auth";
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBqV2zeFQJOZJgcEbtM1oDAl30_037CPk",
  authDomain: "playlists-1e171.firebaseapp.com",
  projectId: "playlists-1e171",
  storageBucket: "playlists-1e171.appspot.com",
  messagingSenderId: "1043620253635",
  appId: "1:1043620253635:web:8d037225bf2a8ad9d6f776",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};