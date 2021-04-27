import React from 'react';
import Settings from './../../components/settings';
import './SettingsViewStyle'; //kasnke blir cscc??
import { View } from 'react-native'

const SettingsViewScreen = props => {
  return (
    <View className="settingsViewScreen">
      <Settings/>
    </View>
  );
};

export default SettingsViewScreen;




