import React, { useEffect, useState } from "react";
import { CardContainer, Header, OrderItem, Wrapper } from "../../components";
import { SlBasket } from "react-icons/sl";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, order } from "../../redux/thunk";
import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";

import "./Korzinka.css";

export const Korzinka = () => {
  const { pizzaList, ordered } = useSelector((state) => state);
  const dispatch = useDispatch();
  const getPizzaRef = collection(db, "allPizza");
  const getOrderedRef = collection(db, "ordered");
  const [allprice, setAllPrice] = useState(900);

  useEffect(() => {
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
    dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
  }, []);

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
        <div className="center-div">
          <div className=" main-section">
            <nav className="page-title containerr">
              <h2>
                <span>
                  <SlBasket />
                </span>{" "}
                Korzina
              </h2>
              <Link className="clear-all" to="/pustoy">
                <span>
                  <BsFillTrashFill />
                </span>
                clear basket
              </Link>
            </nav>
          </div>
          {ordered.map((item) => {
            return (
              <OrderItem
                key={item.id}
                item={item}
                onClickItem2={() => {}}
                allPizza={allprice}
              />
            );
          })}

          <footer className="footer containerr">
            <div className="footer-top">
              <p>
                Всего пицц: <span className="count"> {ordered.length} шт.</span>
              </p>
              <p>
                Сумма заказа: <span className="price-all">900 ₽</span>
              </p>
            </div>
            <div className="footer-bottom">
              <Link to="/" className="go-back btn ">
                {" "}
                <span>
                  <img src="/assets/icons/prev.png" alt="" />
                </span>{" "}
                Go back
              </Link>
              <Link to="/oplata" className="btn pay-now">
                Pay now
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};
