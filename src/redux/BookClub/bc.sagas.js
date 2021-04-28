import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess } from "./bc.actions";
import bcTypes from './bc.types'


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
    groupName   
}}) {

 try { 
     const bookclub = yield firestore.collection('bookclubs')
     .add({groupName});
     console.log('testtest'+bookclub.id);
     yield getSnapshotFromBC(bookclub);
 } catch(err){
     console.log('error oups');
 }
}

export function* onCreateBCStart() {
    yield takeLatest(bcTypes.CREATE_BC_START, createBC);
}

export default function* bcSagas(){
    yield all([
        call(onCreateBCStart)
    ])
}