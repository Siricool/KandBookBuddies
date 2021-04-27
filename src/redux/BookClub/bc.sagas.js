import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { handleBCProfile, firestore } from './../../firebase/utils';


export function* createBC({ payload:{
    groupName   
}}) {

 try { 
     const bookclub = yield firestore.collection('bookclubs')
     .add({groupName});
     console.log('testtest'+bookclub.id);
      //yield getSnapshotFromBC(bookclub);
 } catch(err){
     console.log('error oups');
 }
}

export function* onCreateBCStart() {
    yield takeLatest(userTypes.CREATE_BC_START, createBC);
}

export default function* bcSagas(){
    yield all([
        call(onCreateBCStart)
    ])
}