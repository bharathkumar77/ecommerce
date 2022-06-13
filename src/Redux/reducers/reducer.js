import { useEffect } from "react";

const initialState = {
    products: [],
    isLoggedIn: false,
    cartNumber: 0,
    cartProducts: []
}

const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_PRODUCTS":
            return { ...state, products: payload }
        case "LOGIN":
            return { ...state, isLoggedIn: true }
        case "LOGOUT":
            return { ...state, isLoggedIn: false }
        case "ADD_TO_CART":
            return { ...state, cartNumber: state.cartNumber + 1, cartProducts: [...state.cartProducts, payload] }
        case "DELETE_FROM_CART":
            return { ...state, cartNumber: state.cartNumber - 1, cartProducts: state.cartProducts.filter((each) => each.id !== payload) }
        default:
            return state
    }
}

export default Reducer;