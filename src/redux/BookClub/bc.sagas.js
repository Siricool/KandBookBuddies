import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess, fetchBCStart, setBC } from "./bc.actions";
import bcTypes from './bc.types'
import { handleFetchBC } from './bc.helpers'

export function* getSnapshotFromBC(bookclub = {}){

    try{
        const snapshot = yield bookclub.get();

        yield put(
            createdBCSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );

    } catch (err){

    }
}
export function* createBC({ payload:{
    groupName,
    members   
}}) {

 try { 
     const bookclub = yield firestore.collection('bookclubs')
     .add({groupName, members});
     yield getSnapshotFromBC(bookclub);
 } catch(err){
     console.log('error oups');
 }
}

export function* onCreateBCStart() {
    yield takeLatest(bcTypes.CREATE_BC_START, createBC);
}

export function* fetchBC() {
    try {
      const bc = yield handleFetchBC();
      console.log(bc)
      yield put(
        setBC(bc) 
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchBCStart() {
    yield takeLatest(bcTypes.FETCH_BC_START, fetchBC);
  }

export default function* bcSagas(){
    yield all([
        call(onCreateBCStart),
        call(onFetchBCStart)
    ])
}

