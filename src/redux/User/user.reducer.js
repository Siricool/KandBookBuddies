import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  updatedUser: null,
  resetPasswordSuccess: false,
  userErr: [],
  chosenUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: []
      }
   
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload
      }
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE
      }
    case userTypes.UPDATED_USER_SUCCESS:
      return {
        ...state,
        updatedUser: action.payload
      }
    case userTypes.FETCH_ALL_USERS_SUCCESS: 
    return {
      ...state,
      chosenUser: action.payload
    }
    default:
      return state;
  }
  
};

export default userReducer;