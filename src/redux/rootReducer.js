import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

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


// 7/5 nedan:
 /*
export const rootReducer = combineReducers({
  user: userReducer,
  bookclub: bcReducer,
  booksData: bookReducer,
  cartData: cartReducer 
});

const configStorage = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartData'] //all of the pieces of state in our redux store that we want to persist,
                           // right now only cartdata, user is stored in authentication
};

export default persistReducer(configStorage, rootReducer);
*/