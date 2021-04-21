import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import * as firebase from 'firebase'; fel hämtning
import firebase from 'firebase/app';

import '@firebase/firestore';


const initialState = {
    data: {},
}

//Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "setPersonData":
            return { ...state, personData: action.value };

        default:
            return state;
    }
}

//Store 
const store = createStore (reducer, applyMiddleware(thunkMiddleware));
export { store };

//Action creators
const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
};

const watchPersonData = () => {
    return function(dispatch){
        console.log("uid: "+ firebase.auth().currentUser.uid);

        const docRef = firebase.firestore()
                        .collection("users")
                        .doc(firebase.auth().currentUser.uid);

        docRef.get().then(function(doc){
            //console.log(doc.data());
            const personData = doc.data();
            const actionSetPersonData = setPersonData(personData);
            dispatch(actionSetPersonData);
        })                
       
    }
}
export { setPersonData, watchPersonData }