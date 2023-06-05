import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const fetchItems = (getPizzaRef, ACTION_NAME) => async (dispatch) => {
  try {
    const data = await getDocs(getPizzaRef);
    const pizzas = data.docs.map((pizza) => {
      const newPizza = {
        ...pizza.data(),
        id: pizza.id,
      };
      return newPizza;
    });
    dispatch({ type: ACTION_NAME, payload: pizzas });
  } catch (error) {
    console.error(error);
  }
};


// export const fetchItems = (url, ACTION_NAME) => async (dispatch) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch({ type: ACTION_NAME, payload: data });
//   } catch (error) {
//     console.error("ERROR FETCH ITEMS");
//   }
// };

// export const order = (url, orderedPizza) => async (dispatch) => {
//   try {
//     const config = {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderedPizza),
//     };

//     const response = await fetch(url, config);
//     if (response.ok) {
//       dispatch(fetchItems(`http://localhost:3030/ordered`, `SAVE_ORDER`));
//     }
//   } catch (error) {
//     console.error("ERROR FETCH ITEMS");
//   }
// };

// export const postItem = (url, pizzaObj) => async (dispatch) => {
//   try {
//     const config = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(pizzaObj),
//     };

//     const response = await fetch(url, config);
//     const data = await response.json();
//     // console.log(data);
//     // dispatch({ type: ACTION_NAME, payload: data });
//   } catch (error) {
//     console.error("ERROR FETCH ITEMS");
//   }
// };

// export const likeSneakers = (url, orderedPizza) => async (dispatch) => {
//   try {
//     const config = {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderedPizza),
//     };

//     const response = await fetch(url, config);
//     if (response.ok) {
//       dispatch(fetchItems(`http://localhost:3030/ordered`, `SAVE_ORDER`));
//     }
//   } catch (error) {
//     console.error("ERROR FETCH ITEMS");
//   }
// };

// export const orderSneakers = (url, orderedPizza) => async (dispatch) => {
//   try {
//     const config = {
//       method: "PATCH",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderedPizza),
//     };

//     const response = await fetch(url, config);
//     if (response.ok) {
//       dispatch(fetchItems(`http://localhost:3030/ordered`, `SAVE_ORDER`));
//     }
//   } catch (error) {
//     console.error("ERROR FETCH ITEMS");
//   }
// };

// export const deleteOrder = (url) => async (dispatch) => {
//   try {
//     const response = await fetch(url, {
//       method: "DELETE",
//     });
//     const data = await response.json();
//     // dispatch({ type: ACTION_NAME, payload: data });
//   } catch (error) {
//     console.error("ERROR DELETE ITEMS");
//   }
// };
