export const addToCart = (value) => {
    return {
        type: "ADD_TO_CART",
        payload: value
    }
}

export const deleteFromCart = (value) => {
    return {
        type: "DELETE_FROM_CART",
        payload: value
    }
}