import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess, createdCommentSuccess, setBC } from "./bc.actions";
import bcTypes from './bc.types'
import { handleFetchBC } from './bc.helpers'

export function* getSnapshotFromBC(bookclub = {}) {

    try {
        const snapshot = yield bookclub.get();

        yield put(
            createdBCSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );

    } catch (err) {

    }
}


export function* createBC({ payload: {
    groupName,
    members,

} }) {

    try {
        const bcbooks = [];
        const comments = [];
        const bookclub = yield firestore.collection('bookclubs')
            .add({ groupName, members, bcbooks, comments });
        yield getSnapshotFromBC(bookclub);
    } catch (err) {
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



export function* joinBC({ payload: {
    club,
    currentUser } }) {

    try {
        //UPDATERA BOOKKLUBBENS MEDLEMSLISTA
        const snapshot = yield firestore.collection('bookclubs')
            .doc(club).get();
        const tempsArr = snapshot.data().members
        tempsArr.push(currentUser);


        yield firestore.collection('bookclubs').doc(club).update({ members: tempsArr });

        const updatedBCRef = yield firestore.collection('bookclubs').doc(club);

        yield getSnapshotFromBC(updatedBCRef);
    }
    catch (err) {

    }
}


export function* onJoinBCStart() {
    yield takeLatest(bcTypes.JOIN_BC_START, joinBC);
}

// adda bok till bc 
export function* bookInBC({ payload: {
    club,
    book } }) {
    try {
        //UPDATERA BOOKKLUBBENS BOKLISTA
        const clubID = club.documentID;
        const snapshot = yield firestore.collection('bookclubs')
        .doc(clubID).get();
        const bookArr = snapshot.data().bcbooks;

        const title = book.title;
        const author = book.author;
        const picture = book.picture;
        const id = book.id;
        const genre = book.genre;
        bookArr.push({ title, picture, author, id, genre, read: false, comments: [], rating: [] });

        yield firestore.collection('bookclubs').doc(clubID).update({ bcbooks: bookArr });

        const updatedBookRef = yield firestore.collection('bookclubs')
            .doc(clubID);

        yield getSnapshotFromBC(updatedBookRef);
    }
    catch (err) {
        console.log('ERROR I SAGA')
    }
}


export function* onBookInBC() {
    yield takeLatest(bcTypes.BOOK_IN_BC, bookInBC);
}

export function* createComment({ payload: {
    comment,
    currentUser,
    clubID,
    timeStamp }
}) {

    try {
        const userName = currentUser.displayName;
        const snapshot = yield firestore.collection('bookclubs')
            .doc(clubID).get();
        const commentsArr = snapshot.data().comments;
        commentsArr.push({ comment: comment, user: userName, time: timeStamp });


        yield firestore.collection('bookclubs').doc(clubID).update({ comments: commentsArr });

        const updatedCommentsRef = yield firestore.collection('bookclubs')
            .doc(clubID);

        yield getSnapshotFromBCComment(updatedCommentsRef);
    }
    catch (err) {
        console.log('ERROR I SAGA')

    }
}
export function* getSnapshotFromBCComment(bookclub = {}) {

    try {
        const snapshot = yield bookclub.get();
        console.log('hejsan nu är du här')
        yield put(
            createdCommentSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );

    } catch (err) {

    }
}

export function* onCreateCommentStart() {
    yield takeLatest(bcTypes.CREATE_COMMENT_START, createComment)
}


//rating saga preppad 11/5, kalla på denna funktion för att uppdatera rating: updateRating(club, rating)
export function* updateRating({ payload: {
    documentID,
    star,
    counter,
    bookObject 
     } }) {
        console.log('i sagas'+documentID)
        console.log('star i saga'+star) 
        console.log('bobj'+bookObject)
    try {
        const clubID = documentID;
        console.log('clubID i try'+clubID)
        console.log('STAR I SAGA TRY' + star)
        console.log('COUNTER I TRY'+counter)
        const snapshot = yield firestore.collection('bookclubs')
            .doc(clubID).get();
        
        console.log('efter snapshot')
        const ratingArr = snapshot.data().bcbooks[counter].rating;
        
        console.log(snapshot.data())
        const currentRate = ratingArr;
        console.log('efter ratingArr tas ut: '+ratingArr)
        console.log(ratingArr)
        
        ratingArr.push(star);

        console.log('test efter push')
        console.log(ratingArr)

       // console.log(bcbooks[counter].title)
        //console.log(book.title)
        console.log('tjenatjena siri id: '+bookObject.id)
       //const heoo = yield firestore.collection('bookclubs').doc(clubID).where('bcbooks'[counter], '==',  bookOject).get();
/*
       const hej = yield firestore.collection('bookclubs/'+clubID+'/bcbooks').where('title', '==', bookObject.title).get() 
       const hejhej = hej.data().title;
       console.log('hejhej')
       console.log(hejhej)
       */
       const booksInBC = yield firestore.collection('bookclubs').doc(clubID).get() //.where('title', '==', bookObject.title).collection('bcbooks')
       console.log('efter where')
       const bookbcarr = booksInBC.data().bcbooks;
       console.log(bookbcarr)
       const newBookList = [];
       bookbcarr.map((bcBook, index) => {
           console.log('i map')
           console.log(bcBook)
           console.log(bcBook.title)
           console.log(bookObject.title)
           console.log('slut på logs')
           if (bcBook.title == bookObject.title) {
               console.log('boken')
               console.log(bcBook)
               const newBook = {
                author: bcBook.author,
                comments: bcBook.comments,
                genre: bcBook.genre,
                id: bcBook.id,
                picture: bcBook.picture,
                rating: ratingArr,
                read: bcBook.read,
                title: bcBook.title,
               }
               newBookList.push(newBook)
           } 
           else {
               newBookList.push(bcBook)
           }
         }
       )
       yield firestore.collection('bookclubs').doc(clubID).update({bcbooks: newBookList})     
       console.log('NEDAN STRING ?:')  
       console.log('efter yield')
       const updatedRatingRef = yield firestore.collection('bookclubs')
            .doc(documentID);

        yield getSnapshotFromBC(updatedRatingRef);
    }
    catch (err) {
        console.log('ERROR ')
        console.log(star)
        console.log(documentID)
        
    }
}

export function* onUpdateRating() {
    yield takeLatest(bcTypes.UPDATE_RATING, updateRating)
}



export default function* bcSagas() {
    yield all([
        call(onCreateBCStart),
        call(onFetchBCStart),
        call(onJoinBCStart),
        call(onBookInBC),
        call(onCreateCommentStart),
        call(onUpdateRating)
    ])
}

