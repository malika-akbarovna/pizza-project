import React, { useEffect, useState } from "react";
import { CardContainer, Filter, Header, Wrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/thunk";
import { addToOrder } from "./helpOrder";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection } from "firebase/firestore";

import "./Home.css";

export const Home = () => {
  const { pizzaList, ordered, filter } = useSelector((state) => state);
  const [pizz, setPizz] = useState(pizzaList);
  const getPizzaRef = collection(db, "allPizza");
  const getOrderedRef = collection(db, "ordered");

  localStorage.setItem("isLogin", true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showInfo = (item) => {
    navigate(`/single/${item.id}`);
  };

  useEffect(() => {
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
    dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
  }, []);

  return (
    <div className="homeContainer">
      <Wrapper>
        <Header />
        <Filter />
        <p className="pizzas container">Все пиццы</p>
        <CardContainer
          onClickItem2={(item) =>
            dispatch(addToOrder(item, getOrderedRef, getPizzaRef, ordered))
          }
          onClickItem={showInfo}
          items={filter}
        />
      </Wrapper>
    </div>
  );
};
