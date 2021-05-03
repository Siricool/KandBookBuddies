import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';


const ChooseBC = ({ navigation }) => {
    const handleCreate = () => {
        navigation.navigate('CreateBC')
      }
    const handleJoin = () => {
        navigation.navigate('JoinBC')
      }
    
    return (

        <View style={styles.container} >
            <KeyboardAwareScrollView
                style={{ width: '100%', height: '100%' }}>

        <TouchableOpacity
            style={styles.button}
            onPress={() => handleCreate()}>
            <Text>Create new book club </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleJoin()}>
            <Text>Join book club </Text>
          </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default ChooseBC;