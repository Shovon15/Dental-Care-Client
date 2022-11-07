// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArKaPZVMCyqDw6RM2c5-tIcu9_nJ5XLcY",
    authDomain: "dental-service-client-app.firebaseapp.com",
    projectId: "dental-service-client-app",
    storageBucket: "dental-service-client-app.appspot.com",
    messagingSenderId: "252518853238",
    appId: "1:252518853238:web:bd2047ca8f53b513000d57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
