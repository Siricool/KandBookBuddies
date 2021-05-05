
import React from 'react';
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'

import styles from '../styles.js'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const Settings= ({ navigation }) => {

  const { currentUser } = useSelector(mapState);
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '90%'}}
        >
           <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
         <Text style={styles.whiteText}>Settings </Text>
         <Text style={styles.smallText}>{currentUser.displayName}, feel free to update your settings! </Text>
         
         <Text style={styles.middleText}>Time to update your profile pic? </Text>

         <Text style={styles.middleText}>Wanna switch to night mode? </Text>
         <Text style={styles.smallText}>This will take care of 
         your eyes when clubbing at night! </Text>

         <Image
            style={styles.bookLogo}
            source={require('../../../assets/whiteicon.png')}
          />
         </ImageBackground>
         </KeyboardAwareScrollView>

         <View style={styles.row}>
          <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('MyProfile')}>
          <Icon
                        reverse
                        name='ios-person'
                        type='ionicon'
                        color='#fde3b7'
                    />
          </TouchableHighlight>
          <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('BCOverview')}>
          <Icon
                        reverse
                        name='ios-book'
                        type='ionicon'
                        color='#fde3b7'
                    />
          </TouchableHighlight>
          <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('StartPage')}>
          <Icon
                        reverse
                        name='ios-home'
                        type='ionicon'
                        color='#fde3b7'
                    />
          </TouchableHighlight>
          <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Search')}>
          <Icon
                        reverse
                        name='ios-search'
                        type='ionicon'
                        color='#fde3b7'
                    />
          </TouchableHighlight>
          <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Settings')}>
          <Icon
                        reverse
                        name='ios-settings'
                        type='ionicon'
                        color='#fde3b7'
                    />
          </TouchableHighlight>
        </View>

      
    </View>
  );
}

export default Settings;



