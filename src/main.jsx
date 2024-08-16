import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext, FirebaseContext } from "./context/FireContext.jsx";
import {
  auth,
  signUp,
  signIn,
  logOut,
  uploadImage,
  getProduct,
  singleProView,
} from "./firebase/FirebaseConfig.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider
        value={{
          auth,
          signUp,
          signIn,
          logOut,
          uploadImage,
          getProduct,
          singleProView,
        }}
      >
        <GlobalContext>
          <App />
        </GlobalContext>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
