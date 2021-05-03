import bookTypes from './book.types';

const INITIAL_STATE = {
  books: []   
  //book: {},
};

const bookReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case bookTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload
      }
    
    default:
      return state;
  }
};

export default bookReducer;
