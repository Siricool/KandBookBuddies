import bcTypes from './bc.types';

const INITIAL_STATE = {
    currentBC: null,
};

const bcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case bcTypes.CREATED_BC_SUCCESS:
            return {
                ...state,
                currentBC: action.payload
            }
            default:
                return state;
    }
};

export default bcReducer;