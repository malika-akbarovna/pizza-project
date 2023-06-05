import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const OrderItem = ({ item, onClickItem2 }) => {
  const { title, imageUrl, price } = item;
  const [piece, setPiece] = useState(1);
  const dispatch = useDispatch();
  const { pizzaList, ordered } = useSelector((state) => state);

  const inc = () => {
    if (piece >= 1) {
      setPiece((prevValue) => prevValue + 1);
    } else {
      setPiece(1);
    }
  };

  const dec = () => {
    if (piece > 1) {
      setPiece((prevValue) => prevValue - 1);
    } else {
      setPiece(1);
    }
  };

  return (
    <div className="items-container containerr">
      <div className="items-container__left">
        <img src={imageUrl} alt="" />
        <div className="items-container__info">
          <h3>{title}</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className="items-right">
        <div className="select_item">
          <img
            onClick={dec}
            src="/assets/icons/minus.png"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <p className="count"> {piece}</p>

          <img
            onClick={inc}
            src="/assets/icons/plus.png"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
        <p className="price">от {Number(price * piece)} ₽</p>
        <div className="delete_item">
          <img
            src="/assets/icons/delete.png"
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => onClickItem2(item, dispatch)}
          />
        </div>
      </div>
    </div>
  );
};
