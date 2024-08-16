
// To combine multiple reducers, each managing a specific part of the state, into one overall root reducer.
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
    allProducts: productReducer,
    product : selectedProductReducer
})

export default rootReducer