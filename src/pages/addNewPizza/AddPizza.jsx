import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./addPizza.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../redux/thunk";

export const AddPizza = () => {
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaUrl, setPizzaUrl] = useState("");
  const [price, setPrice] = useState();
  const getPizzaRef = collection(db, "allPizza");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addPizza = async () => {
    const newPizza = {
      title: pizzaName,
      count: 0,
      isOrdered: false,
      description:
        "lacus ex non lobortis, in orci maximus maximus non Nunc ex dignissim, felis, fringilla amet, nulla, nec sollicitudin. ipsum tortor. gravida ex amet, hendrerit  nec efficitur. elementum nec lorem. elit quis nibh id Sed Donec Nunc in scelerisque ac porta turpis nulla, turpis est. Donec id non lorem. diam fringilla dui. ",
      imageUrl: pizzaUrl,
      price: price,
      pizzaId: 1,
      pizzaSize: [20, 26, 36],
      sizeNum: 1,
      size: ["тонкое", "традиционное"],
    };

    setPizzaName("");
    setPizzaUrl("");
    setPrice();
    await addDoc(getPizzaRef, newPizza);
    navigate("/home");
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
  };

  return (
    <div className="main-center_div">
      <div className="center_div ">
        <div className="element-center">
          <header
            className="top-section"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2>Add new pizza</h2>
          </header>
          <section className="section-center" style={{ marginTop: "0" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Enter pizza's name</label>
              <input
                value={pizzaName}
                onChange={({ target }) => setPizzaName(target.value)}
                type="text"
                placeholder="pizza's name"
              />
            </div>
            <div>
              <label style={{ display: "flex", flexDirection: "column" }}>
                Enter pizza's photo
              </label>
              <input
                value={pizzaUrl}
                onChange={({ target }) => setPizzaUrl(target.value)}
                type="text"
                placeholder="Url"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Enter pizza's price</label>
              <input
                value={price}
                onChange={({ target }) => setPrice(target.value)}
                type="text"
                placeholder="price"
              />
            </div>
          </section>
          <footer>
            <button className="add-pizza" onClick={() => addPizza()}>
              add pizza
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
