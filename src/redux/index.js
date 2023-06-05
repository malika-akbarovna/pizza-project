import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import pizaareducer from "./pizzareducer";
// store 1. reducer, 2. state
export const store = createStore(pizaareducer, applyMiddleware(thunk));
// console.log(store.getState());
