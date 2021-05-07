
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'
import { signOutUserStart } from './../../redux/User/user.actions';
import styles from '../styles.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const Settings= ({ navigation }) => {
  const { currentUser } = useSelector(mapState); //OBS SKRIV EJ UT CURRENTUSER PÅ SIDAN, BLIR FUCKAT MED SIGNOUT
  const dispatch = useDispatch();

  

  const handleSignOut = () => { 
    dispatch(signOutUserStart()) ;
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '90%'}}
        >
           <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
         <Text style={styles.whiteText}>Settings </Text>
         <Text style={styles.textLeft}><Text style={styles.capital}></Text> Feel free to update your settings! </Text>
         <View style={styles.whiteSquare}>
         <Text style={styles.smallText}>Time to update your profile pic? </Text>
         <TouchableOpacity style={styles.smallButton}><Text>Click here</Text></TouchableOpacity>
         </View>
         <View style={styles.whiteSquare}>
         <Text style={styles.smallText}>Wanna switch to night mode? </Text>
         <TouchableOpacity style={styles.smallButton}><Text>Click here</Text></TouchableOpacity>
         </View>
         <View style={styles.whiteSquare}>
         <Text style={styles.smallText}>This will take care of your eyes when clubbing at night! </Text>
         <TouchableOpacity style={styles.smallButton}><Text>Click here</Text></TouchableOpacity>
         </View>
         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text></Text> 

         <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignOut()}>
            <Text>Sign Out </Text>
          </TouchableOpacity>

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



