
import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';

import styles from './styles.js'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const Settings= ({ navigation }) => {

  const { currentUser } = useSelector(mapState);
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '88%'}}
        >
         <Text style={styles.text}> Settings </Text>
         <Text style={styles.smallText}> {currentUser.displayName}, feel free to update your settings! </Text>
         
         <Text style={styles.text2}> Time to update your profile pic? </Text>

         <Text style={styles.text2}> Wanna switch to night mode? </Text>
         <Text style={styles.smallText}> This will take care of 
         your eyes when clubbing at night! </Text>
         </KeyboardAwareScrollView>

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

      
    </View>
  );
}

export default Settings;



