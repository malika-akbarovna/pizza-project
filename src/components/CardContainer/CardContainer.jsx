import React from "react";
import { Card } from "../Card/Card";
import "./CardContainer.css";

export const CardContainer = ({ items, onClickItem2, onClickItem }) => {
  return (
    <div className="card-container container">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            onClickItem2={onClickItem2}
            onClickItem={onClickItem}
          />
        );
      })}
    </div>
  );
};
