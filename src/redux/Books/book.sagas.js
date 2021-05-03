import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setBooks, fetchBooksStart } from './book.actions';
import {   handleFetchBooks } from './book.helpers';
import bookTypes from './book.types';


export function* fetchBooks() {
  try {
    const books = yield handleFetchBooks();
    yield put(
      setBooks(books) 
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchBooksStart() {
  yield takeLatest(bookTypes.FETCH_BOOKS_START, fetchBooks);
}

export default function* bookSagas() {
  yield all([
    call(onFetchBooksStart)
  ])
}