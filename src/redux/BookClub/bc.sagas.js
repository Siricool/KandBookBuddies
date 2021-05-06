import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess, setBC} from "./bc.actions";
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



  export function* joinBC({ payload:{
      club,
      currentUser }})
       {
      
    try {
        //UPDATERA BOOKKLUBBENS MEDLEMSLISTA
        const snapshot = yield firestore.collection('bookclubs').doc(club).get();
        const tempsArr = snapshot.data().members
        tempsArr.push(currentUser);
        

        yield firestore.collection('bookclubs').doc(club).update({members: tempsArr });
        
        const updatedBCRef = yield firestore.collection('bookclubs').doc(club);

        yield getSnapshotFromBC(updatedBCRef);
  }
    catch (err){

  }}

 
  export function* onJoinBCStart() {
      yield takeLatest(bcTypes.JOIN_BC_START, joinBC);
  }

export default function* bcSagas(){
    yield all([
        call(onCreateBCStart),
        call(onFetchBCStart),
        call(onJoinBCStart),
    ])
}

