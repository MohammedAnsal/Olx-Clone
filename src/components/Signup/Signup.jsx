import React, { useContext } from "react";
import "./Signup.css";
import olx_logo from "/olx-logo.png";
import { useState } from "react";
import { toast } from "sonner";
import { AuthContext, FirebaseContext } from "../../context/FireContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  SignUp User :-

  const { signUp } = useContext(FirebaseContext);
  const { setUser } = useContext(AuthContext);

  const user_auth = async (e) => {
    e.preventDefault();

    if (form_Validation()) {
      await signUp(name, email, password, phone);
      setUser(email,phone)
      toast.success("SignUp Successfully...");
      navigate("/login");
    }
  };

  // Form Validation :-

  const form_Validation = () => {
    if (!name.trim() || !password.trim() || !phone.trim() || !email.trim()) {
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

    if (phone.length < 10) {
      toast.error("Enter a valid phone number!");
      return false;
    }

    return true;
  };

  return (
    <div className="all-div">
      <div className="signupParentDiv">
        <form onSubmit={user_auth}>
          <img width="150px" height="120px" src={olx_logo} alt="" />

          <input
            type="text"
            placeholder="UserName"
            value={name}
            onChange={(val) => {
              setName(val.target.value);
            }}
          />

          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(val) => {
              setPhone(val.target.value);
            }}
          />

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
          <button type="submit">SignUp</button>
        </form>
        <a href="/login" className="text-decoration-none">
          Already have an account? Sign In
        </a>
      </div>
    </div>
  );
};

export default Signup;