import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import reducer from "./reducer";
import { composeWithDevTools } from '@redux-devtools/extension';

// const composeEnhancers = (typeof window !== "undefined" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store