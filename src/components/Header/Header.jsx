import React from "react";
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useSelector } from "react-redux";
import "./Header.css";

export const Header = () => {
  const { ordered } = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <nav className="header">
      <div className="header-container container">
        <div className="header-logo" navigate="/">
          <img
            className="logo"
            src="/assets/icons/pizza-logo.png"
            alt="pizza-logo"
            width={"38px"}
            style={{ margin: "7px" }}
          />
          <div className="header-left-text">
            <Link to="/home" className="header-left-logoFont">
              REACT PIZZA
            </Link>
            <p className="magazin-text">самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div
          className="header-right"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span>
            <HiOutlineViewGridAdd
              style={{ width: "50px", cursor: "pointer" }}
              size={30}
              onClick={() => navigate("/new")}
            />
          </span>
          <Link to="/korzinka" className="btn-korzinka">
            <span> 520R</span>
            <div className="basket">
              <SlBasket />
            </div>
            <span>{ordered.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
