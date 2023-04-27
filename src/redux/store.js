import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
