import React from 'react';
import { useSelector } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';

/*
const mapState = ({ user }) => ({
    currentUser: user.currentUser
});*/

const ChooseBC = ({ navigation }) => {
    //const { currentUser } = useSelector(mapState);

    const handleCreate = () => {
        navigation.navigate('CreateBC')
      }

    const handleJoin = () => {
        navigation.navigate('CreateBC')
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