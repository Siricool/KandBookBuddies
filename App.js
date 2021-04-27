import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './src/components/signin/index'
import Signup from './src/components/registration'
import StartPage from './src/components/start'
import BCOverview from './src/components/bcOverview'
import Settings from './src/components/settings'
import { store } from './src/redux/createStore';
import { Provider, useSelector } from "react-redux";


import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
/*
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});
*/

const Stack = createStackNavigator();


export default function App() {

  //const { currentUser } = useSelector(mapState);
  //console.log('i apps' + currentUser)
 // const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="StartPage" component={StartPage} />


          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="StartPage" component={StartPage} />
              <Stack.Screen name="BCOverview" component={BCOverview} />
              <Stack.Screen name="Settings" component={Settings} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
    
  );
}


/*import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './src/components/toolbar/index'
import AppContainer from './src/components/toolbar/AppNavigation'
import NavigationService from './src/components/toolbar/NavigationService'

const App = () => {
  return (
    <AppContainer
      ref={navigationRef => {
        NavigationService.setTopLevelNavigator(navigationRef)
      }}
      />
  )
}
*/

/*import React, { useEffect } from 'react';
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


*/
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
