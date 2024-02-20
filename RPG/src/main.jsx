import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root.jsx";
import LoginPage from './routes/login_page.jsx';
import Create_character from './routes/create_character.jsx';

import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPoGJZxpM9jbk3F_awxpur43FkNQp6uVk",
  authDomain: "rpgtony-aa91c.firebaseapp.com",
  projectId: "rpgtony-aa91c",
  storageBucket: "rpgtony-aa91c.appspot.com",
  messagingSenderId: "78956573662",
  appId: "1:78956573662:web:d4f6015ee37429d193234f",
  measurementId: "G-ZFF3BPWDKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized!", app, analytics);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "create-character",
    element: <Create_character />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
