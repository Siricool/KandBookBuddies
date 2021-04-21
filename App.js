import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LogInScreen, StartPageScreen, RegistrationScreen, SettingsViewScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import { firebase } from './src/firebase/config'
/*import firebase from 'firebase/app'*/

//for the simple guide
import { Provider } from 'react-redux';
import { store } from './redux/App-redux'; 

const Stack = createStackNavigator();
//Julia test import LogInScreen from './Screens/LogInScreen';
//import BookClubScreen from './Screens/BookClubScreen'; verkar oklart att ladda in flera Screens på samma return


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LogInScreen" component={LogInScreen}/>
            <Stack.Screen name="StartPageScreen" component={StartPageScreen}/>
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
          </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}

/*<View style = {styles.container}>
          <Text>My App</Text>
          </View>*/ 

/*export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>

      { user ? ( //Denna navigering går ej
        <Stack.Screen name="StartPageScreen">
          {props => <StartPageScreen {...props} extraData={user} />}
        </Stack.Screen>

      ) : (
        <>

          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </>

      )}
      </Stack.Navigator>
    </NavigationContainer>
    //Julia test<LogInScreen/>
    //Start <BookClubScreen/>
    //<View style={styles.container}>
      //<Text>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d679ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
