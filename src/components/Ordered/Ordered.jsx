import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocFromCache } from "firebase/firestore";
import { db } from "../../firebase-config";
import { addCount, decCount, deletePizza } from "../../pages/home/helpOrder";

export const OrderItem = ({ item }) => {
  const { size, pizzaId, pizzaSize, sizeNum } = item;
  const { pizzaList, ordered, filter } = useSelector((state) => state);
  const { title, imageUrl, price, count } = item;
  const getOrderedRef = collection(db, "ordered");
  const dispatch = useDispatch();

  return (
    <div className="items-container containerr">
      <div className="items-container__left">
        <img src={imageUrl} alt="" />
        <div className="items-container__info">
          <h3>{title}</h3>
          <p>
            {size[pizzaId]}, {pizzaSize[sizeNum]} см.
          </p>
        </div>
      </div>
      <div className="items-right">
        <div className="select_item">
          <img
            onClick={() =>
              dispatch(decCount(item, getOrderedRef, pizzaList, dispatch))
            }
            src="/assets/icons/minus.png"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <p className="count" key={item.id}>
            {count}
          </p>
          <img
            onClick={() =>
              dispatch(addCount(item, getOrderedRef, pizzaList, dispatch))
            }
            src="/assets/icons/plus.png"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
        <p className="price">от {Number(price * count)} ₽</p>
        <div className="delete_item">
          <img
            src="/assets/icons/delete.png"
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() =>
              dispatch(deletePizza(item, getOrderedRef, pizzaList))
            }
          />
        </div>
      </div>
    </div>
  );
};
