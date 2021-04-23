import React from 'react';
import { View, Text } from 'react-native';
//import './styles.js';

const AuthWrapper = ({ headline, children }) => {
  return (
    <View className="authWrapper">
      <View className="wrap">
        {headline && <Text h2>{headline}</Text>}

        <View className="children">
          {children && children}
        </View>
      </View>
    </View>
  );
}

export default AuthWrapper;