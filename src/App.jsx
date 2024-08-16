import React, { useContext, useEffect } from "react";
import Home from "./pages/Home";
import View from "./components/View/View";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContext } from "./context/FireContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/FirebaseConfig";
import Create from "./components/Create/Create";
import SinglePostContext from "./context/PostContext";

const App = () => {

  const { user, setUser } = useContext(AuthContext);  

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      

      if (user) {

        setUser(() => { 

          localStorage.setItem("user", JSON.stringify(user));
          return user;

        });

      }

    });

    return () => unsubscribe();
    
  }, [setUser]);

  return (
    <>
      <SinglePostContext>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route
            path="/"
            element={
              user ? <Home /> : <Navigate replace={true} to={"/login"} />
            }
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate replace={true} to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate replace={true} to={"/"} />}
          />
          <Route
            path="/create"
            element={
              user ? <Create /> : <Navigate replace={true} to={"/login"} />
            }
          />
          <Route
            path="/view"
            element={
              user ? <View /> : <Navigate replace={true} to={"/login"} />
            }
          />
        </Routes>
      </SinglePostContext>
    </>
  );
};

export default App;
