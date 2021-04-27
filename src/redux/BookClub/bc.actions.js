import bcTypes from './bc.types';

export const createBCStart = bcCredentials => ({
    type: bcTypes.CREATE_BC_START,
    payload: bcCredentials
})

