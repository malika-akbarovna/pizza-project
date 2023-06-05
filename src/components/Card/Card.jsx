import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ item, onClickItem2, onClickItem }) => {
  const { title, imageUrl, price, size, sizeNum, pizzaSize } = item;
  const [piizaType, setPizzaType] = useState(size);
  const [piizaSiza, setPiizaSiza] = useState(pizzaSize);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="cardHeader">
        <img
          width={"100%"}
          src={imageUrl}
          alt="pizza"
          style={{ cursor: "pointer" }}
          onClick={() => onClickItem(item, dispatch)}
        />
      </div>
      <p className="cardTitle">{title}</p>

      <div className="select">
        <div className="select-top">
          {piizaType.map((type) => {
            return <span className="tradit">{type}</span>;
          })}
        </div>
        <div className="select-bottom">
          {piizaSiza.map((pizsiz) => {
            return <button className="sizee">{pizsiz} см</button>;
          })}
          {/* <button className="sizee">26 см.</button>
          <button className="sizee">30 см.</button>
          <button className="sizee">40 см.</button> */}
        </div>
      </div>
      <div className="card-bottom">
        <p className="summa">{price} ₽</p>
        <button
          // class item.isOrdered "btn-add"
          className={item.isOrdered ? "btn-order" : "btn-add"}
          onClick={() => onClickItem2(item, dispatch)}
        >
          {item.isOrdered ? "Добавлено " : "+  Добавить "}{" "}
        </button>
      </div>
    </div>
  );
};
