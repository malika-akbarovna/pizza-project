import React, { useEffect, useState } from "react";
import { Wrapper } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchItem, fetchItems } from "../../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase-config";
import { doc } from "firebase/firestore";
import "./Single.css";

export const Single = () => {
  const { single } = useSelector((state) => state);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const docRef = doc(db, "allPizza", id);

  useEffect(() => {
    dispatch(fetchItem(docRef, `SAVE_SINGLE_PIZZA`));
  }, []);

  return (
    <Wrapper>
     
      <div className="single-page">
        <nav className="header">
          <div className="header-container container">
            <div className="header-logo">
              <img
                className="logo"
                src="/assets/icons/pizza-logo.png"
                alt="pizza-logo"
                width={"38px"}
                style={{ margin: "7px" }}
              />
              <div className="header-left-text">
                <Link to="/" className="header-left-logoFont">
                  REACT PIZZA
                </Link>
                <p className="magazin-text">самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <nav className="container-elements">
        <div className="elements containerr">
          <div className="left-side">
            <img src={single.imageUrl} alt="" width={"395px"} />
          </div>
          <div className="right-side">
            <h2>{single.title}</h2>
            <p>{single.description}</p>
          </div>
        </div>
      </nav>
      <footer className="footer-elements containerr">
        <button className="go-home" onClick={() => navigate("/home")}>
          {" "}
          Вернуться назад
        </button>
        <button className="pay" onClick={() => navigate("/oplata")}>
          Оплатить сейчас
        </button>
      </footer>
      
    </Wrapper>
  );
};
