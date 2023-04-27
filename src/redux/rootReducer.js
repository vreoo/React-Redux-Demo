import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import waffleReducer from "./waffle/waffleReducer";
import fetchUserReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    waffle: waffleReducer,
    user: fetchUserReducer,
});

export default rootReducer;
