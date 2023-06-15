import React, { useEffect, useState } from "react";
import "./SingUp.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIt, fetchItem } from "../../redux/thunk";

export const SingUp = () => {
  const { pizzaList, ordered, user } = useSelector((state) => state);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = localStorage.getItem("isLogin");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const singUp = (e) => {
    e.preventDefault();
    if (
      userName == null ||
      userName == "" ||
      password == null ||
      password == "" ||
      userName.length <= 5 ||
      password.length <= 5
    ) {
      window.alert("fill the form correctly");
    } else {
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);

      navigate("/singin");
    }
  };
  return (
    <div className="cont">
      <form className="login-page__div">
        <div className="form">
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
            <input
              value={userName}
              onChange={({ target }) => setUsername(target.value)}
              type="text"
              placeholder="username"
              required
            />
            <label style={{ display: "flex", flexDirection: "column" }}>
              Enter password
            </label>
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="password"
              required
            />
          </div>
          <button
            onClick={(e) => singUp(e)}
            type="onSubmit"
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
