import { createStore } from "redux";
import authUser from "./reducers";

const store = createStore(authUser);

export default store;
