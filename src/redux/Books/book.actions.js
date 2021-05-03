import bookTypes from './book.types';
/*
export const addProductStart = productData => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: productData
});
*/

export const fetchBooksStart = () => ({
  type: bookTypes.FETCH_BOOKS_START,
  //payload: filters
});

export const setBooks = books => ({
    type: bookTypes.SET_BOOKS,
    payload: books
  });

  
/*
export const fetchBookStart = bookID => ({
    type: bookTypes.FETCH_BOOK_START,
    payload: bookID
  });
  */

  /*
export const setBook = book => ({
  type: bookTypes.SET_BOOK,
  payload: book
});
*/

/*
export const fetchProductStart = productID => ({
  type: productsTypes.FETCH_PRODUCT_START,
  payload: productID
});

export const setProduct = product => ({
  type: productsTypes.SET_PRODUCT,
  payload: product
});
*/