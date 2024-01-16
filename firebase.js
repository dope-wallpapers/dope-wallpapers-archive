import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC9WC7xng91yv3egIUTCKR0sTWnYrnKuVY",
  authDomain: "dope-wallpapers-archive.firebaseapp.com",
  projectId: "dope-wallpapers-archive",
  storageBucket: "dope-wallpapers-archive.appspot.com",
  messagingSenderId: "1082636837448",
  appId: "1:1082636837448:web:5aad367117a43348d8ee7d",
  measurementId: "G-WKPQR0M23S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);