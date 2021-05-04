import { combineReducers } from 'redux';

import bcReducer from './BookClub/bc.reducer';
import userReducer from './User/user.reducer';
import bookReducer from './Books/book.reducer';
import cartReducer from './Cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  bookclub: bcReducer,
  booksData: bookReducer,
  cartData: cartReducer 
})

