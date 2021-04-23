import React from 'react';

import { TextInput, TouchableOpacity,  StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import {useSelector} from 'react-redux';

//import BBicon from '../../../assets/BBicon.png'

//const UserProfile = props => {
  //const { currentUser } = props;
  //const { displayName } = currentUser;

const mapState = ({user}) => ({
  currentUser: user.currentUser,
});

const StartPage = () => {

  const{ currentUser }= useSelector(mapState);

  return (
    <View className="StartPage">
      <Text> Välkommen {currentUser.fullName} </Text>
    </View>
  );
}

export default StartPage;