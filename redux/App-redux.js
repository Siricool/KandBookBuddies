import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import * as firebase from 'firebase'; fel hämtning
import firebase from 'firebase/app'

const initialState = {
    data: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setPersonData":
            return { ...state, data: action.value };

        default:
            return state;
    }
}

const store = createStore (reducer, applyMiddleware(thunkMiddleware));
export { store };

const setPersonData = (data) => {
    return {
        type: "setPersonData",
        value: data
    };
};

const watchPersonData = () => {
    return function(dispatch) {
      firebase.database().ref("person").on("value", function(snapshot)
      { 
          var data = snapshot.val();
          var actionSetPersonData = setPersonData(data);
          dispatch(actionSetPersonData);
      }, function(error) { console.log(error); });
    }
  };

export { setPersonData, watchPersonData }