import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore } from './../../firebase/utils';
import { createdBCSuccess, createdCommentSuccess, setBC, setChosenBC, updatedRatingSuccess } from "./bc.actions";
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
        const bookclub = yield firestore.collection('bookclubs').add({ groupName, members, bcbooks, comments });
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

    }
}

export function* onFetchBCStart() {
    yield takeLatest(bcTypes.FETCH_BC_START, fetchBC);
}

export function* fetchChosenBC() {
    try {
        const bc = yield handleFetchBC();
        let numbOfClubs = bc.length;
        const randClubNumb = Math.floor(Math.random() * (numbOfClubs)) + 1;
        let chosenClub = bc[randClubNumb];
        yield put(
            setChosenBC(chosenClub)
        );
    } catch (err) {
    }
}

export function* onFetchChosenBCStart() {
    yield takeLatest(bcTypes.FETCH_CHOSEN_BC_START, fetchChosenBC);
}



export function* joinBC({ payload: {
    club,
    currentUser } }) {
    try {
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

export function* bookInBC({ payload: {
    club,
    book } }) {
    try {
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
    timeStamp,
     }
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


export function* updateRating({ payload: {
    documentID,
    star,
    counter,
    bookObject,
    comment,
    currentUser
} }) {
    try {
        const clubID = documentID;
        const snapshot = yield firestore.collection('bookclubs').doc(clubID).get();
        const ratingArr = snapshot.data().bcbooks[counter].rating;
        const commentArr = snapshot.data().bcbooks[counter].comments;
        ratingArr.push(star);
        commentArr.push({comment: comment, user: currentUser.displayName})

        const booksInBC = yield firestore.collection('bookclubs').doc(clubID).get()
        const bookbcarr = booksInBC.data().bcbooks;
        const newBookList = [];
        
        bookbcarr.map((bcBook, index) => {
            if (bcBook.title == bookObject.title) {
                const newBook = {
                    author: bcBook.author,
                    comments: commentArr,
                    genre: bcBook.genre,
                    id: bcBook.id,
                    picture: bcBook.picture,
                    rating: ratingArr,
                    read: true,
                    title: bcBook.title,
                }
                newBookList.push(newBook)
            }
            else {
                newBookList.push(bcBook)
            }
        }
        )
        yield firestore.collection('bookclubs').doc(clubID).update({ bcbooks: newBookList })
        const updatedRatingRef = yield firestore.collection('bookclubs')
            .doc(documentID);
        yield getSnapshotFromBCRating(updatedRatingRef);
    }
    catch (err) {
    }
}

export function* getSnapshotFromBCRating(rating = {}) {
    try {
        const snapshot = yield rating.get();
        yield put(
            updatedRatingSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {

    }
}

export function* onUpdateRating() {
    yield takeLatest(bcTypes.UPDATE_RATING, updateRating)
}

export default function* bcSagas() {
    yield all([
        call(onCreateBCStart),
        call(onFetchBCStart),
        call(onFetchChosenBCStart),
        call(onJoinBCStart),
        call(onBookInBC),
        call(onCreateCommentStart),
        call(onUpdateRating)
    ])
}

