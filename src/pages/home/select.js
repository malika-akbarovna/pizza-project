import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { fetchItems } from "../../redux/thunk";

export const selectType =
  (item, type, index, pizzas, getPizzaRef) => async (dispatch) => {
    const updateCount = {
      ...item,
      pizzaId: index,
    };

    const editpizzaCount = async () => {
      const pizzadoc = doc(db, "allPizza", item.id);
      await updateDoc(pizzadoc, updateCount);
    };

    editpizzaCount();
    dispatch(fetchItems(getPizzaRef, `SAVE_FILTER_PIZZA`));
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));

    console.log(item, type, index);
  };

export const selectSize =
  (item, pizzasize, index, pizzas, getPizzaRef) => async (dispatch) => {
    const updateCount = {
      ...item,
      sizeNum: index,
    };

    const editpizzaCount = async () => {
      const pizzadoc = doc(db, "allPizza", item.id);
      await updateDoc(pizzadoc, updateCount);
    };

    editpizzaCount();
    dispatch(fetchItems(getPizzaRef, `SAVE_FILTER_PIZZA`));
    dispatch(fetchItems(getPizzaRef, `SAVE_PIZZA`));

    console.log(item, pizzasize, index);
  };
