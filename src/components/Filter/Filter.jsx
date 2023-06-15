import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchFilter, fetchItems } from "../../redux/thunk";
import { collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Filter.css";

export const clicked = (btn, pizzaList = {}, dispatch, filter) => {
  const getPizzaRef = collection(db, "allPizza");
  const pizza = pizzaList.filter((pizz) => {
    if (btn == "Все" || btn == "Закрытые") {
      return pizzaList;
    }
    return pizz.category == btn;
  });
  dispatch(fetchFilter(getPizzaRef, `SAVE_FILTER_PIZZA`, pizza));

  return pizza;
};

export const Filter = () => {
  const { pizzaList } = useSelector((state) => state);
  const [active, setActive] = React.useState(false);
  const [title, setTitle] = React.useState("популярное");
  const dispatch = useDispatch();
  const titleList = [
    { id: 1, title: "alfavit" },
    { id: 2, title: "price" },
  ];
  const buttonArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const choose = (data) => {
    setTitle(titleList);
    setActive(!active);
  };

  return (
    <div className="btns-filter">
      <div className="filter-container container">
        <div className="filter-left">
          {buttonArr.map((btn, index) => {
            return (
              <button
                key={index}
                className="button"
                onClick={() => clicked(btn, pizzaList, dispatch)}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="filter-right">
          <img
            src="/assets/icons/Vector.png"
            alt=""
            style={{ margin: "0 10px" }}
          />
          <div onClick={() => setActive(!active)} className="sort">
            Сортировка по : <span>{title}</span>
          </div>
          <ul className={active ? "options" : "hide"}>
            {titleList.map((item) => {
              return (
                <li
                  key={item.id}
                  className="items"
                  onClick={() => choose(item.title)}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
