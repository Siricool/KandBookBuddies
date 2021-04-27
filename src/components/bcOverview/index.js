import React from 'react';
import styles from './styles.js';
import {useSelector} from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

  const BCOverview = ({ navigation }) => {
    const{ currentUser }= useSelector(mapState);
    console.log('BOOOOOOKCLUBBBB '+currentUser.displayName)

    return (
      <View style={styles.container}>
           <KeyboardAwareScrollView style={{width: '100%', height: '100%'}}>
        <Text style={styles.title}> My Book Clubs {currentUser.displayName} </Text>

        <TouchableOpacity style = {styles.button}>
        <Text style = {styles.buttonText}>Book Lovers </Text>
        </TouchableOpacity>    

        <View style={styles.row}>
          <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
              style={styles.menuToolbar}
              source={require('../../../assets/Profile_picture.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
              style={styles.menuToolbar}
              source={require('../../../assets/BookClubs_picture.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('StartPage')}>
            <Image
              style={styles.menuToolbar}
              source={require('../../../assets/House_picture.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
              style={styles.menuToolbar}
              source={require('../../../assets/Search_picture.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => navigation.navigate('Settings')}>
            <Image
              style={styles.menuToolbar}
              source={require('../../../assets/Settings_picture.png')}
            />
          </TouchableHighlight>
        </View>

        </KeyboardAwareScrollView>
      </View>
    );
  }

export default BCOverview;