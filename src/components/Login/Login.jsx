import React, { useContext, useState } from "react";
import "./Login.css";
import { toast } from "sonner";
import olx_logo from "/olx-logo.png";
import { AuthContext, FirebaseContext } from "../../context/FireContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  SignIn User :-

  const { signIn } = useContext(FirebaseContext);
  const { setUser } = useContext(AuthContext);

  const user_auth = async (e) => {

    e.preventDefault();

    if (form_validation()) {
      
      await signIn(email, password);
      setUser(email)
      navigate("/");
      toast.success("SignIn Successfully...");
    }

  };

  // Form Validation :-

  const form_validation = () => {
    if (!password.trim() || !email.trim()) {
      toast.error("Please fill all the fields");
      return false;
    }

    if (!email.endsWith("@gmail.com")) {
      toast.error("Enter a valid email");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  return (
    <div className="all-div">
      <div className="signinParentDiv">
        <form onSubmit={user_auth}>
          <img width="150px" height="120px" src={olx_logo} alt="" />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(val) => {
              setEmail(val.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(val) => {
              setPassword(val.target.value);
            }}
          />
          <button type="submit">SignIn</button>
        </form>

        <a href="/signup" className="text-decoration-none">
          Don't have an account? Sign Up
        </a>
      </div>
    </div>
  );
};

export default Login;
