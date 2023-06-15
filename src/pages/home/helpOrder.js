import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { fetchItems } from "../../redux/thunk";

export const addCount = (item, getOrderedRef, pizz, dispatch) => async () => {
  let idd = pizz.filter((items) => {
    return items.title === item.title;
  });

  let obj = idd.find((items) => {
    return (items.title = item.title);
  });

  const updateCount = {
    ...item,
    count: item.count + 1,
  };
  const editCount = async () => {
    const pizzadoc = doc(db, "ordered", item.id);
    await updateDoc(pizzadoc, updateCount);
  };

  const editpizzaCount = async () => {
    const pizzadoc = doc(db, "allPizza", obj.id);
    await updateDoc(pizzadoc, updateCount);
  };

  editCount();
  editpizzaCount();
  dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
};

export const decCount = (item, getOrderedRef, pizz, dispatch) => async () => {
  let idd = pizz.filter((items) => {
    return items.title === item.title;
  });

  let obj = idd.find((items) => {
    return (items.title = item.title);
  });

  if (item.count === 0) {
    const updateCount = {
      ...item,
      count: item.count,
    };

    const editCount = async () => {
      const pizzadoc = doc(db, "ordered", item.id);
      await updateDoc(pizzadoc, updateCount);
    };
    editCount();
  } else {
    const updateCount = {
      ...item,
      count: item.count - 1,
    };

    const editCount = async () => {
      const pizzadoc = doc(db, "ordered", item.id);
      await updateDoc(pizzadoc, updateCount);
    };
    const editAllPizzaCount = async () => {
      const pizzadoc = doc(db, "allPizza", obj.id);
      await updateDoc(pizzadoc, updateCount);
    };
    editCount();
    editAllPizzaCount();
  }

  dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
  return item.id;
};

export const addToOrder =
  (pizzaObj, getOrderedRef, getPizzaRef, ordered) => async (dispatch) => {
    let idd = ordered?.filter((item) => {
      return item.title === pizzaObj.title;
    });
    let obj = idd.find((item) => {
      return (item.title = pizzaObj.title);
    });

    try {
      const clickedPizza = {
        ...pizzaObj,
        isOrdered: true,
        count: pizzaObj.count + 1,
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
        const pizzadoc = doc(db, "allPizza", pizzaObj?.id);
        await updateDoc(pizzadoc, updateCount);
      };

      const editCount = async () => {
        const pizzadoc = doc(db, "ordered", obj?.id);
        await updateDoc(pizzadoc, updateCount);
      };

      if (pizzaObj.count === 0) {
        editpizza();
        await addDoc(getOrderedRef, clickedPizza);

        dispatch(fetchItems(getPizzaRef, `SAVE_ORDER`));
        dispatch(fetchItems(getPizzaRef, `SAVE_FILTER_PIZZA`));
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
      } else if (pizzaObj.count === 1) {
        editpizzaCount();
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
        dispatch(fetchItems(getPizzaRef, `SAVE_FILTER_PIZZA`));
      } else if (pizzaObj.count > 1) {
        editpizzaCount();
        editCount();
        dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));
        dispatch(fetchItems(getPizzaRef, `SAVE_FILTER_PIZZA`));
      } else {
        window.alert("error comand");
      }
    } catch (error) {
      console.error(error);
    }
  };

export const deletePizza = (item, getOrderedRef, pizz) => async (dispatch) => {
  let idd = pizz.filter((items) => {
    return items.title === item.title;
  });

  let obj = idd.find((items) => {
    return (items.title = item.title);
  });

  const clickedPizza = {
    ...item,
    isOrdered: false,
    count: 0,
    pizzaId: 3,
    sizeNum: 4,
  };

  const editpizza = async () => {
    const pizzadoc = doc(db, "allPizza", obj.id);
    await updateDoc(pizzadoc, clickedPizza);
  };

  editpizza();

  const pizzadoc = doc(db, "ordered", item.id);
  await deleteDoc(pizzadoc);
  dispatch(fetchItems(getOrderedRef, `SAVE_DELETE`));
  dispatch(fetchItems(getOrderedRef, `SAVE_ORDER`));
};
