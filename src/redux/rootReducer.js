import { combineReducers } from 'redux';

import bcReducer from './BookClub/bc.reducer';
import userReducer from './User/user.reducer';

export default combineReducers({
  user: userReducer,
  bookclub: bcReducer
})
