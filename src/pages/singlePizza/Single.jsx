import React, { useEffect, useState } from "react";
import { Wrapper } from "../../components";
import { Link, useParams } from "react-router-dom";
import { fetchItems } from "../../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import "./Single.css";

export const Single = () => {
  const { single } = useSelector((state) => state);

  let { id } = useParams();
  const dispatch = useDispatch();

  console.log(single);

  useEffect(() => {
    dispatch(
      fetchItems(`http://localhost:3030/allPizza/${id}`, `SAVE_SINGLE_PIZZA`)
    );
  }, []);

  return (
    <Wrapper>
      {/* {single.map((item) => {
        return (
          
        )
      })} */}
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
        <button className="go-home"> Вернуться назад</button>
        <button className="pay">Оплатить сейчас</button>
      </footer>
      {/* <div className=" main-section"> */}
      {/* <nav className="page-title containerr">
          <h2>Korzina</h2>
          <Link className="clear-all" to="/pustoy">
            clear basket
          </Link>
        </nav> */}
      {/* </div> */}
    </Wrapper>
  );
};
