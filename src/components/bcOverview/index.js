import React from 'react';
import styles from './styles.js';
import {useSelector} from 'react-redux';
import { View, Text, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

  const BCOverview = () => {
    const{ currentUser }= useSelector(mapState);
  
    return (
      <View style={styles.container}>
           <KeyboardAwareScrollView style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}> My Book Clubs </Text>

        <TouchableOpacity style = {styles.button}>
        <Text style = {styles.buttonText}>Book Lovers </Text>
        </TouchableOpacity>    

        </KeyboardAwareScrollView>
      </View>
    );
  }

export default BCOverview;