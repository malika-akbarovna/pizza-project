import { getDocs, getDoc, doc } from "firebase/firestore";

export const fetchItems = (getPizzaRef, ACTION_NAME) => async (dispatch) => {
  try {
    const data = await getDocs(getPizzaRef);
    const pizzas = data.docs.map((pizza) => {
      let i = 10;
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

export const fetchFilter =
  (getPizzaRef, ACTION_NAME, filt) => async (dispatch) => {
    try {
      const data = await getDocs(getPizzaRef);
      const pizzas = data.docs.map((pizza) => {
        const newPizza = {
          ...pizza.data(),
          id: pizza.id,
        };
        return newPizza;
      });
      dispatch({ type: ACTION_NAME, payload: filt });
    } catch (error) {
      console.error(error);
    }
  };

export const fetchItem = (getPizzaRef, ACTION_NAME) => async (dispatch) => {
  try {
    const docSnap = await getDoc(getPizzaRef);
    dispatch({ type: ACTION_NAME, payload: docSnap.data() });
  } catch (error) {
    console.error(error);
  }
};
