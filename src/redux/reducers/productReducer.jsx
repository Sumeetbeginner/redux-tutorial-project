
// Reducer always takes initital state & action

// Reducer - updates the state of your app based on the actions it receives.

import { ActionTypes } from "../constants/action-types"

const initialState = {
    products : [],
}

// Reducer
export const productReducer = (state=initialState, {type, payload}) =>{    // {type,payload} : destructuring
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}