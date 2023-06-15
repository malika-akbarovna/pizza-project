import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import pizaareducer from "./pizzareducer";
export const store = createStore(pizaareducer, applyMiddleware(thunk));
