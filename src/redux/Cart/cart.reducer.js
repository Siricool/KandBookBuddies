import cartTypes from './cart.types';
import { handleAddToCart, handleAddToReading, handleAddToClub } from './cart.utils'

const INITIAL_STATE = {
    cartItems: [],
    readingItems: [],
    clubItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({ //detta gör man för att inte adda samma bok flera ggr
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })

            };
        case cartTypes.ADD_TO_READING:
            return {
                ...state,
                readingItems: handleAddToReading({ //detta gör man för att inte adda samma bok flera ggr
                    prevReadingItems: state.readingItems,
                    nextReadingItem: action.payload
                })
            };
        case cartTypes.ADD_TO_CLUB:
            return {
                ...state,
                clubItems: handleAddToClub({ //detta gör man för att inte adda samma bok flera ggr
                    prevClubItems: state.clubItems,
                    nextClubItem: action.payload
                })

            };
        default:
            return state;
    }
};

export default cartReducer;