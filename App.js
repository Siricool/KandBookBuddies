import React, { useEffect } from 'react';
import {Provider} from "react-redux";
import {store} from './src/redux/createStore';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-native';
import { checkUserSession } from './src/redux/User/user.actions';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./src/components/stacknavigator/stacknavigator"

export default function App() {     
  return (
    <Provider store={store}>      
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}



/*
// components
//import AdminToolbar from './components/AdminToolbar';

// hoc
import WithAuth from './src/hoc/withAuth';
import WithAdminAuth from './src/hoc/withAdminAuth';

// layouts
//import MainLayout from './layouts/MainLayout';
//import HomepageLayout from './layouts/HomepageLayout';
//import AdminLayout from './layouts/AdminLayout';
//import DashboardLayout from './layouts/DashboardLayout';

// pages

//vi kommer nog ha const App = props

import LogInScreen from './src/screens/login/LogInScreen';
import UserProfile from './src/screens/startpage/StartPageScreen';
import  { Registration } from './src/screens/registration/RegistrationScreen';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">   
      <Switch>
        <Route exact path='/login' render={() => (
            <LogInScreen />
        )}
        />

        <Route exact path="/registration" render={() => (
            <Registration/>
        )}
        />

        <Route exact path="/startpage" render={() => (
            <UserProfile/>
        )}
        />
      </Switch>
    </div>
  );
  }
  
  export default App;


*/
