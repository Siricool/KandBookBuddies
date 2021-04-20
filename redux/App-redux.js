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
        firebase.firestore()
        .collection("users")
        .get()
        .then((snapshot) => 
            {snapshot.docs.forEach(doc => 
                //lär behöva göra om utan forEach med currentUser aktiverad för att få tag i profil
                //pga det är den som loopar igenom alla användare just nu
                { console.log(doc.data()) //denna som skriver ut alla användare i terminalen                    
                  //var actionSetPersonData = setPersonData(doc.data())
                  //dispatch(actionSetPersonData);  
                  dispatch(setPersonData); 
                  //Oklart hur dispatchen ska formuleras för att skicka datan till startpage,
                  //blir error när man skickar hela listan, dvs doc.data()
				},
                function(error) {console.log(error)});                
            });
    }
}
/*
const watchPersonData = () => {
    return function(dispatch) {

        
      firebase.firestore().collection("users").on("value", function(snapshot)
      { 
          var personData = snapshot.val();
          var actionSetPersonData = setPersonData(personData);
          dispatch(actionSetPersonData);
      }, function(error) { console.log(error); });
    }
  };*/

export { setPersonData, watchPersonData }