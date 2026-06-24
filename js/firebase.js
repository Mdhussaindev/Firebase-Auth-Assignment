import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsYqzhogMuxbxel92zCXy0sB9dmgNa8uw",
  authDomain: "fir-auth-assignment-434b0.firebaseapp.com",
  projectId: "fir-auth-assignment-434b0",
  storageBucket: "fir-auth-assignment-434b0.firebasestorage.app",
  messagingSenderId: "852517567826",
  appId: "1:852517567826:web:bb6a28b53c393144cace8b",
  measurementId: "G-LQ06TBJ1H5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);