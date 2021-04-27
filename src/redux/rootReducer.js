//import { AsyncStorage } from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import bcReducer from './BookClub/bc.reducer';
//import { persistStore, persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; //detta verkar vara gammalt sätt

import userReducer from './User/user.reducer';

export default combineReducers({
  user: userReducer,
  //bookclub: bcReducer
})

/*
export const rootReducer = combineReducers({
  user: userReducer
});
*


//export default persistReducer(rootReducer);
/*
const configStorage = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['']
};

export default persistReducer(configStorage, rootReducer);
*/