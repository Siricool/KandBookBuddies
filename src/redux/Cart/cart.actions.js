import cartTypes from './cart.types'

export const addBook = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});

export const addBookRead = (nextReadItem) => ({
    type: cartTypes.ADD_TO_READING,
    payload: nextReadItem
});

export const addBookClub = (nextClubItem) => ({
    type: cartTypes.ADD_TO_CLUB,
    payload: nextClubItem
});