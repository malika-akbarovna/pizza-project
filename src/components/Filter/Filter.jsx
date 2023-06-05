import React from "react";

import "./Filter.css";

export const Filter = () => {
  const [active, setActive] = React.useState(false);
  const [title, setTitle] = React.useState("популярное");
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
          {buttonArr.map((btn) => {
            return <button className="button">{btn}</button>;
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
