import React from 'react';
import UserProfile from './../../components/userProfile';
import './StartStyle'; //kasnke blir cscc??
import {View} from 'react-native'

const StartPageScreen = props => {
  return (
    <View className="startPageScreen">
      <UserProfile />
    </View>
  );
};

export default StartPageScreen;