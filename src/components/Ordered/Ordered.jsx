import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocFromCache } from "firebase/firestore";
import { db } from "../../firebase-config";
import { addCount, addToOrder, deletePizza } from "../../pages/home/helpOrder";

export const OrderItem = ({ item, onClickItem2, allPizza }) => {
  const { pizzaList, ordered } = useSelector((state) => state);
  const { title, imageUrl, price, count } = item;
  const getPizzaRef = collection(db, "allPizza");
  const getOrderedRef = collection(db, "ordered");
  const [piece, setPiece] = useState(1);
  const [piece2, setPiece3] = useState();

  const dispatch = useDispatch();

  // const docRef = doc(db, "cities", "SF");
  // const inc = () => {
  //   if (piece >= 1) {
  //     setPiece((prevValue) => prevValue + 1);
  //   } else {
  //     setPiece(1);
  //   }
  // };

  // const

  const dec = () => {
    ordered.map((pizzas) => {
      console.log(pizzas.id);
      return pizzas.id;
    });
  };

  const getAllDocs = async () => {
    // const doc = await getDocFromCache(docRef);
    setPiece3(pizzaList);
    console.log(piece2);
    // return doc.data();
  };
  getAllDocs();
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
            onClick={() => {}}
            src="/assets/icons/minus.png"
            alt=""
            style={{ cursor: "pointer" }}
          />
          <p className="count">{piece}</p>
          <img
            // onClickItem2={(item) =>
            //   dispatch(
            //     addToOrder(item, getOrderedRef, getPizzaRef, ordered, ordered)
            //   )
            // }
            onClick={() => dispatch(addCount(item, getOrderedRef))}
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
            onClick={() => dispatch(deletePizza(item, getOrderedRef))}
          />
        </div>
      </div>
    </div>
  );
};
