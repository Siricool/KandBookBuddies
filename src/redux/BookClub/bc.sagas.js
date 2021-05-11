import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess, createdCommentSuccess, setBC} from "./bc.actions";
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
    members,
     
}}) {

 try {
     const bcbooks = [];
     const comments = []; 
     const bookclub = yield firestore.collection('bookclubs')
     .add({groupName, members, bcbooks, comments});
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
        const snapshot = yield firestore.collection('bookclubs')
        .doc(club).get();
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

// adda bok till bc 
export function* bookInBC({ payload:{
    club,
    book }})
     {

    
  try {
      //UPDATERA BOOKKLUBBENS BOKLISTA
      const clubID = club.documentID;
      const snapshot = yield firestore.collection('bookclubs')
      .doc(clubID).get();
      const bookArr = snapshot.data().bcbooks;
      bookArr.push({book, read: false});
      

      yield firestore.collection('bookclubs').doc(clubID).update({bcbooks: bookArr });
      
      const updatedBookRef = yield firestore.collection('bookclubs')
      .doc(clubID);

      yield getSnapshotFromBC(updatedBookRef);
}
  catch (err){
console.log('ERROR I SAGA')

}}


export function* onBookInBC() {
    yield takeLatest(bcTypes.BOOK_IN_BC, bookInBC);
}

export function* createComment( {payload: {
    comment,
    currentUser,
    clubID,
    timeStamp}
    }) {

        try {
            const userName = currentUser.displayName;
            const snapshot = yield firestore.collection('bookclubs')
            .doc(clubID).get();
            const commentsArr = snapshot.data().comments;
            commentsArr.push({comment: comment, user: userName, time: timeStamp});
           
      
            yield firestore.collection('bookclubs').doc(clubID).update({comments: commentsArr });
            
            const updatedCommentsRef = yield firestore.collection('bookclubs')
            .doc(clubID);
      
            yield getSnapshotFromBCComment(updatedCommentsRef);
      }
        catch (err){
      console.log('ERROR I SAGA')
       
      }
}
export function* getSnapshotFromBCComment(bookclub = {}){

    try{
        const snapshot = yield bookclub.get();
        console.log('hejsan nu är du här')
        yield put(
            createdCommentSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );

    } catch (err){

    }
}

export function* onCreateCommentStart() {
    yield takeLatest(bcTypes.CREATE_COMMENT_START, createComment)
}


export default function* bcSagas(){
    yield all([
        call(onCreateBCStart),
        call(onFetchBCStart),
        call(onJoinBCStart),
        call(onBookInBC),
        call(onCreateCommentStart)
    ])
}

