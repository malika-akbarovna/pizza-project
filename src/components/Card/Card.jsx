import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./Card.css";

export const Card = ({ item, onClickItem2, onClickItem }) => {
  const { title, imageUrl, price, size, sizeNum, pizzaSize, count } = item;
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
        </div>
      </div>
      <div className="card-bottom">
        <p className="summa">{price} ₽</p>
        <button
          className="btn-add"
          onClick={() => onClickItem2(item, dispatch)}
        >
          <span>
            <FaPlus />
          </span>
          Добавить <div className="count-item">{count}</div>
        </button>
      </div>
    </div>
  );
};
