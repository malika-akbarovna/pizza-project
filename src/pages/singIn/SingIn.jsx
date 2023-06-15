import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingIn.css";

export const SingIn = () => {
  let userName = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  const isLogin = localStorage.getItem("isLogin");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const enter = () => {
    if (name == userName || pass == password) {
      localStorage.setItem("isLogin", true);
      navigate("/home");
    } else {
      window.alert("Error username or password");
    }
  };

  return (
    <div className="cont">
      <form className="login-page__div">
        <img
          src="https://i.pinimg.com/564x/9a/d1/de/9ad1decb024ad788620936e672f077cd.jpg"
          width={"150px"}
          alt=""
        />
        <h1>Sing In</h1>
        <div>
          <label style={{ display: "flex", flexDirection: "column" }}>
            Enter username
          </label>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
            type="text"
            placeholder="username"
          />
          <label style={{ display: "flex", flexDirection: "column" }}>
            Enter password
          </label>
          <input
            value={pass}
            onChange={({ target }) => setPass(target.value)}
            type="password"
            placeholder="password"
          />
        </div>
        <button type="onSubmit" className="submit-btn" onClick={enter}>
          Enter
        </button>
      </form>
    </div>
  );
};
