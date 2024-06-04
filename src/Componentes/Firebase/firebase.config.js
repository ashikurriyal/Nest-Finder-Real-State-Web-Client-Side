// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo6gOPKSQSdkFbPOBPLBhcIseS1eMcrtQ",
  authDomain: "nestfinder-ce7a3.firebaseapp.com",
  projectId: "nestfinder-ce7a3",
  storageBucket: "nestfinder-ce7a3.appspot.com",
  messagingSenderId: "980742275219",
  appId: "1:980742275219:web:11e163bf529aca194dcd66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;