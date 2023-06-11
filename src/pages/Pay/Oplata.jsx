import React from "react";
import "./Oplata.css";
import { useNavigate } from "react-router-dom";

export const Oplata = () => {
  const navigate = useNavigate();
  const click = () => {
    window.alert("thanks for your order");
    navigate("/home");
  };
  return (
    <div className="main-center_div">
      <div className="center_div ">
        <div className="element-center">
          <header className="top-section">
            <img src="/assets/icons/masterCard.png" alt="" />
            <img src="/assets/icons/visa.png" alt="" />
            <img src="/assets/icons/ruPay.png" alt="" />
            <p style={{ color: "#fff" }}>see all</p>
          </header>
          <section className="section-center">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Name of card</label>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <label style={{ display: "flex", flexDirection: "column" }}>
                Card Number
              </label>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label style={{ display: "flex", flexDirection: "column" }}>
                  Expiration date
                </label>
                <input
                  type="text"
                  placeholder="mm/yy"
                  style={{ textDecoration: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "flex", flexDirection: "column" }}>
                  CVV
                </label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </section>
          <footer className="bottom-section">
            <div className="checkout">
              1548${" "}
              <span style={{ cursor: "pointer" }} onClick={click}>
                checkout
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
