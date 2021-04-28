import bcTypes from './bc.types';

export const createBCStart = bcCredentials => ({
    type: bcTypes.CREATE_BC_START,
    payload: bcCredentials
});

export const createdBCSuccess = bookclub => ({
    type: bcTypes.CREATED_BC_SUCCESS,
    payload: bookclub
  });
  

