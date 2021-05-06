import { createSelector } from 'reselect';

export const selectCartData = state => state.cartData;

export const selectCartItems = createSelector(
    [selectCartData],
    cartData => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (quantity, cartItem) =>
            quantity + cartItem.quantity
        , 0)
);

//export const selectReadingData = state => state.readingData;

export const selectReadingItems = createSelector(
    [selectCartData],
    cartData => cartData.readingItems
);

export const selectReadingItemsCount = createSelector(
    [selectReadingItems],
    readingItems => 
        readingItems.reduce(
            (quantity, readingItem) =>
            quantity + readingItem.quantity
        , 0)
);