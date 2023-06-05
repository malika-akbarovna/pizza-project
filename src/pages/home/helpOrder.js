// import { deleteOrder, orderSneakers, postItem } from "../../redux/thunk";
import { getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { fetchItems } from "../../redux/thunk";

export const addToOrder = (pizzaObj, getOrderedRef) => async (dispatch) => {
  try {
    const likeSneakersObj = {
      ...pizzaObj,
      isOrdered: !pizzaObj.isOrdered,
    };
    let res;
    if (pizzaObj.isOrdered) {
      res = await deleteDoc(doc(getOrderedRef, pizzaObj.id));
      dispatch(fetchItems(getOrderedRef, `SAVE_DELETE`));
    } else {
      res = await addDoc(getOrderedRef, likeSneakersObj);
    }

    if (res) {
      window.alert("Successfully done");
    }
  } catch (error) {
    console.error(error);
  }
};
