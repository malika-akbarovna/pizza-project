import React from "react";
import { Wrapper } from "../../components";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="not-found-page">
      <Wrapper>
        <nav className="header"></nav>
        <div className="error-container container">
          <div className="title-container">
            <h2>404</h2>
            <p>Error</p>
          </div>
          <div className="eslice">
            <div className="eslice1"></div>
            <div className="eslice2"></div>
            <div className="eslice3"></div>
          </div>
          <div className="top-right"></div>
        </div>
      </Wrapper>
    </div>
  );
};
