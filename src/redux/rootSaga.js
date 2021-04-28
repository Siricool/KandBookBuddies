import { all, call } from 'redux-saga/effects';
import bcSagas from './BookClub/bc.sagas';

import userSagas from './User/user.sagas';



export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(bcSagas)
    
  ])
}