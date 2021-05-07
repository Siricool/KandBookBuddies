import { createSelector } from 'reselect';

export const selectCartData = state => state.cartData;

// user wish list
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

// user has read books
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

//club reading
export const selectClubItems = createSelector(
    [selectCartData],
    cartData => cartData.clubItems
);

export const selectClubItemsCount = createSelector(
    [selectClubItems],
    clubItems => 
        clubItems.reduce(
            (quantity, clubItem) =>
            quantity + clubItem.quantity
        , 0)
);