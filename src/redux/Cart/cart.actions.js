import cartTypes from './cart.types'

export const addBook = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});

export const addBookRead = (nextReadItem) => ({
    type: cartTypes.ADD_TO_READING,
    payload: nextReadItem
});

export const nextBook = () => ({
    type: cartTypes.NEXT_BOOK
    
});