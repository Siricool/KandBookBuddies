import bcTypes from './bc.types';

export const createBCStart = bcCredentials => ({
    type: bcTypes.CREATE_BC_START,
    payload: bcCredentials
});

export const joinBCStart = bcAndUserCredentials => ({
  type: bcTypes.JOIN_BC_START,
  payload: bcAndUserCredentials
});

export const createdBCSuccess = bookclub => ({
    type: bcTypes.CREATED_BC_SUCCESS,
    payload: bookclub
  });

  export const fetchBCStart = () => ({
    type: bcTypes.FETCH_BC_START,
  });
  
  export const setBC = bc => ({
    type: bcTypes.SET_BC,
    payload: bc
  });

  export const updatedBCSuccess = bc => ({
    type: bcTypes.UPDATED_BC_SUCCESS,
    payload: bc
  });

  export const bookInBC = bcbookAndClub => ({
    type: bcTypes.BOOK_IN_BC,
    payload: bcbookAndClub
  });

  export const createCommentStart = commentCredentials => ({
    type: bcTypes.CREATE_COMMENT_START,
    payload: commentCredentials
});
