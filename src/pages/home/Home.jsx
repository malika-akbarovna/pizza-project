import React, { useEffect, useState } from "react";
import { Card, CardContainer, Filter, Header, Wrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/thunk";
import { addToOrder } from "./helpOrder";
import { useNavigate } from "react-router-dom";
// import { showInfo } from "./showInfo";
import { Single } from "../singlePizza";

import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import "./Home.css";

export const Home = () => {
  const { pizzaList, ordered } = useSelector((state) => state);
  const getPizzaRef = collection(db, "allPizza");
  const getOrderedRef = collection(db, "ordered");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const getMovies = async () => {
  //   const data = await getDocs(getPizzaRef);
  //   const pizzas = data.docs.map((pizza) => {
  //     const newPizza = {
  //       ...pizza.data(),
  //       id: pizza.id,
  //     };
  //     return newPizza;
  //   });
  //   setMovies(pizzas);
  // };
  // console.log(movies);

  const showInfo = (item) => {
    navigate(`/single/${item.id}`);
  };
  console.log(pizzaList);

  useEffect(() => {
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
  }, []);

  // useEffect(() => {
  //   getMovies();
  //   dispatch(fetchItems(`http://localhost:3030/allPizza`, `SAVE_PIZZA`));
  // }, []);

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
        <Filter />
        <p className="pizzas container">Все пиццы</p>
        <CardContainer
          onClickItem2={(item) => dispatch(addToOrder(item, getOrderedRef))}
          onClickItem={showInfo}
          items={pizzaList}
        />
      </Wrapper>
    </div>
  );
};
