import cartTypes from './cart.types'

export const addBook = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});