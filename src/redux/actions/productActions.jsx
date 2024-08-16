
import { ActionTypes } from "../constants/action-types"


// Action - object that tells the reducer what kind of change you want to make to the state, usually containing a type and some data (payload).
export const setProducts = (products) => {
    return{
        type : ActionTypes.SET_PRODUCTS, // Type of Action
        payload : products // Data we are getting
    }
}

export const selectedProduct = (product) => {
    return{
        type : ActionTypes.SELECTED_PRODUCT, // Type of Action
        payload : product // Data we are getting
    }
}

export const removeSelectedProduct = () => {
    return{
        type : ActionTypes.REMOVE_SELECTED_PRODUCT, // Type of Action
    }
}

 