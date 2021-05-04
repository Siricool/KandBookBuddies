import bcTypes from './bc.types';

export const createBCStart = bcCredentials => ({
    type: bcTypes.CREATE_BC_START,
    payload: bcCredentials
});

export const createdBCSuccess = bookclub => ({
    type: bcTypes.CREATED_BC_SUCCESS,
    payload: bookclub
  });

  export const fetchBCStart = () => ({
    type: bcTypes.FETCH_BC_START,
    //payload: filters
  });
  
  export const setBC = bc => ({
    type: bcTypes.SET_BC,
    payload: bc
  });

