import { createStore, compose } from "redux";
//
import reducer from "./modules/accounts/reducers";

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer, composeEnhancers());

export default store;
