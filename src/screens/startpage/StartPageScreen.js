import React from 'react';
import StartPage from './../../components/start';
import './StartStyle'; //kasnke blir cscc??
import {View} from 'react-native'

const StartPageScreen = props => {
  return (
    <View className="startPageScreen">
      <StartPage />
    </View>
  );
};

export default StartPageScreen;