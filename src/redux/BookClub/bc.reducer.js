import bcTypes from './bc.types';

const INITIAL_STATE = {
    currentBC: null,
    bc: [],
    bcbooks: [],
    comments: [],
    
};

const bcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case bcTypes.CREATED_BC_SUCCESS:
            return {
                ...state,
                currentBC: action.payload
            }
        case bcTypes.SET_BC:
            return {
                ...state,
                bc: action.payload
            }
        case bcTypes.BOOK_IN_BC:
            return {
                ...state,
                bcbooks: action.payload
            }

        case bcTypes.CREATED_COMMENT_SUCCESS:
            return {
                ...state,
                comments: action.payload
                }
                
            
        default:
            return state;
    }
};

export default bcReducer;