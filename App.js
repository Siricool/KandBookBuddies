import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LogInScreen from './Screens/LogInScreen';
//import BookClubScreen from './Screens/BookClubScreen'; verkar oklart att ladda in flera Screens på samma return

export default function App() {
  return (
    <LogInScreen/>
    //<BookClubScreen/>
    //<View style={styles.container}>
      //<Text>Open up App.js to start working on your app!</Text>
      //<StatusBar style="auto" />
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
