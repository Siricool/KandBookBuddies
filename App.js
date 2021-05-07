import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './src/components/signin/index';
import Signup from './src/components/registration';
import StartPage from './src/components/start';
import BCOverview from './src/components/bcOverview';
import Settings from './src/components/settings';
import MyProfile from './src/components/profile';
import CreateBC from './src/components/createBC';
import ChooseBC from './src/components/chooseBC';
import Search from './src/components/search';
import JoinBC from './src/components/joinBC';
import JoinBCInside from './src/components/joinBCInside';
import BCView from './src/components/bcView';

import { store, persistor } from './src/redux/createStore'; // 7/5 persistor
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="StartPage" component={StartPage} />
              <Stack.Screen name="BCOverview" component={BCOverview} />
              <Stack.Screen name="BCView" component={BCView} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="MyProfile" component={MyProfile} />
              <Stack.Screen name="CreateBC" component={CreateBC} />
              <Stack.Screen name="JoinBC" component={JoinBC} />
              <Stack.Screen name="JoinBCInside" component={JoinBCInside} />
              <Stack.Screen name="ChooseBC" component={ChooseBC} />
              <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}


/* Behövs om persist store:
<PersistGate persistor={persistor}></PersistGate>
*/