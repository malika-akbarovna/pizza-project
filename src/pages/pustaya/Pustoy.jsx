import React from "react";
import { Wrapper } from "../../components";
import { Link } from "react-router-dom";

import "./Pustoy.css";

export const Pustoy = () => {
  return (
    <Wrapper>
      <div className="korzinka">
        <nav className="header">
          <div className="header-container container">
            <div className="header-logo">
              <img
                className="logo"
                src="/assets/icons/pizza-logo.png"
                alt="pizza-logo"
                width={"48px"}
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
        <div className=" center-divv">
          <div className=" sorry-section ">
            <nav className="sorry-title containerr">
              <h2>
                Корзина пустая <span>😕</span>
              </h2>
            </nav>
            <p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы </p>
            <p> заказать пиццу, перейди на главную страницу.</p>

            <img src="/assets/images/shopping.png" alt="" />
            <button className="btn-go-back"> go back</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
