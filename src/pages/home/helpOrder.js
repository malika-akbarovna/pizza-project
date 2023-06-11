// import { deleteOrder, orderSneakers, postItem } from "../../redux/thunk";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { fetchItems } from "../../redux/thunk";

export const addCount = (item, getOrderedRef) => async () => {
  // console.log(item);
  // const updateCount = {
  //   ...item,
  //   count: item.count + 1,
  // };
  // const editCount = async () => {
  //   const pizzadoc = doc(db, "ordered", item.id);
  //   await updateDoc(pizzadoc, updateCount);
  // };
  return item.id;
  // editCount();
};

export const addToOrder =
  (pizzaObj, getOrderedRef, getPizzaRef, ordered) => async (dispatch) => {
    // let id = ordered;
    // .map((item) => {
    //   return item;
    // });
    // console.log(id);
    // const [counter, setCount] = useState(0);
    //     const posts = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    // setFilteredPosts(posts);
    try {
      // let counter = pizzaObj.count + 1;
      // const clickedPizza = {
      //   ...pizzaObj,
      //   isOrdered: !pizzaObj.isOrdered,
      //   // count: counter + 1,
      // };
      const clickedPizza = {
        ...pizzaObj,
        isOrdered: !pizzaObj.isOrdered,
        count: pizzaObj.count + 1,

        // count: counter + 1,
      };

      const updateCount = {
        ...pizzaObj,
        count: pizzaObj.count + 1,
      };

      const editpizza = async () => {
        const pizzadoc = doc(db, "allPizza", pizzaObj.id);
        await updateDoc(pizzadoc, clickedPizza);
      };

      const editpizzaCount = async () => {
        const pizzadoc = doc(db, "allPizza", pizzaObj.id);
        await updateDoc(pizzadoc, updateCount);
      };

      const editCount = async () => {
        const pizzadoc = doc(db, "ordered", pizzaObj.id);
        await updateDoc(pizzadoc, updateCount);
      };
      const deleditpizza = async () => {
        const pizzadoc = doc(db, "ordered", pizzaObj.id);
        await updateDoc(pizzadoc, clickedPizza);
      };

      // let res;
      // if (pizzaObj.isOrdered) {
      //   editpizza();
      //   const pizzadoc = doc(db, "ordered", pizzaObj.id);
      //   await deleteDoc(pizzadoc);
      //   deleditpizza();
      //   fetchItems();
      //   dispatch(fetchItems(getOrderedRef, `SAVE_DELETE`));
      // } else {
      //   editpizza();
      //   await addDoc(getOrderedRef, clickedPizza);
      //   fetchItems();
      // }

      // const updateBoolCount = async () => {
      //   const pizzadoc = doc(db, "allPizza", pizzaObj.id);
      //   await updateDoc(pizzadoc, clickedPizza);
      //   await updateDoc(pizzadoc, updateCount);
      // };

      if (pizzaObj.count === 0) {
        // updateBoolCount();
        // editpizza(clickedPizza);
        // editpizzaCount();
        editpizza();
        await addDoc(getOrderedRef, clickedPizza);
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
        // editCount(update);
        // fetchItems();
        // setCount(counter + 1);
      } else if (pizzaObj.count === 1) {
        editpizzaCount();
        // addCount()
        // deleditpizza();
        // editCount();
        // console.log(id);
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));

        // editpizza(clickedPizza);

        // console.log(pizzaObj.count);
      } else if (pizzaObj.count > 1) {
        editpizzaCount();
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
        addCount();
        // editCount();
        // deleditpizza();
        // console.log(addCount);
        console.log(pizzaObj.count);
      } else {
        window.alert("error comand");
        // setCount(counter + 1);
        // const pizzadoc = doc(db, "ordered", pizzaObj.id);
        // await deleteDoc(pizzadoc);
        // deleditpizza();
        // fetchItems();
        // dispatch(fetchItems(getOrderedRef, `SAVE_DELETE`));
      }

      // if (res) {
      //   window.alert("Successfully done");
      // }
    } catch (error) {
      console.error(error);
    }
  };

export const deletePizza = (item, getOrderedRef) => async (dispatch) => {
  const pizzadoc = doc(db, "ordered", item.id);
  await deleteDoc(pizzadoc);
  dispatch(fetchItems(getOrderedRef, `SAVE_DELETE`));
  dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
};
