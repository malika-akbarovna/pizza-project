import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { select, selectSize, selectType } from "../../pages/home/select";
import { collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Card.css";

export const Card = ({ item, onClickItem2, onClickItem }) => {
  const { pizzaList, ordered, filter } = useSelector((state) => state);
  const getPizzaRef = collection(db, "allPizza");
  const { title, imageUrl, price, size, sizeNum, pizzaSize, count, pizzaId } =
    item;
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
          {piizaType.map((type, index) => {
            return (
              <span
                onClick={() =>
                  dispatch(
                    selectType(
                      item,
                      type,
                      index,
                      pizzaList,
                      getPizzaRef,
                      dispatch
                    )
                  )
                }
                key={index}
                className={index == pizzaId ? "tradit2" : "tradit"}
              >
                {type}
              </span>
            );
          })}
        </div>
        <div className="select-bottom">
          {piizaSiza.map((pizzasize, index) => {
            return (
              <button
                onClick={() =>
                  dispatch(
                    selectSize(
                      item,
                      pizzasize,
                      index,
                      pizzaList,
                      getPizzaRef,
                      dispatch
                    )
                  )
                }
                key={index}
                className={index == sizeNum ? "sizee2" : "sizee"}
              >
                {pizzasize} см
              </button>
            );
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
