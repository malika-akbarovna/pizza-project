import React from "react";
import "./Login.css";
export const Login = () => {
  return (
    <div className="cont">
      <form className="login-page__div">
        <img
          src="https://i.pinimg.com/564x/9a/d1/de/9ad1decb024ad788620936e672f077cd.jpg"
          width={"150px"}
          alt=""
        />
        <h1>Log In</h1>
        <div>
          <label style={{ display: "flex", flexDirection: "column" }}>
            Enter username
          </label>
          <input type="text" placeholder="username" />
          <label style={{ display: "flex", flexDirection: "column" }}>
            Enter password
          </label>
          <input type="password" placeholder="username" />
        </div>
        <button type="onSubmit">Submit</button>
      </form>
    </div>
  );
};
