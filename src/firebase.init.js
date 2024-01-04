// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_CmU7-91g9FdgMSfH6Cm3ETv89wSf_KQ",
  authDomain: "hospital-management-dc7cb.firebaseapp.com",
  projectId: "hospital-management-dc7cb",
  storageBucket: "hospital-management-dc7cb.appspot.com",
  messagingSenderId: "341168750345",
  appId: "1:341168750345:web:5222f7535d28bc71c81dd8",
  measurementId: "G-C9QY1ZCC4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
