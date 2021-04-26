import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Link, useHistory } from 'react-router-native';
import { emailSignInStart } from './../../redux/User/user.actions';

//import './styles.scss'

import AuthWrapper  from './../AuthWrapper/index';
//import FormInput from './../forms/forminput'; bytte från forminput till textinput nedan
//import Button from './../forms/button';
import { Image, TextInput, TouchableOpacity,  StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { styles } from '../forms/button/styles';

import styles from './styles.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
   /* if (currentUser) {
      resetForm();
      history.push('/');
  },*/ currentUser});

  //ev ta bort
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = () => { //här va en async
    //preventDefault();
    dispatch(emailSignInStart({ email, password }));
    console.log("nu pressed "+email)
    
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };

  /*VI BEHÖVER NGT LIKNANDE FÖR HÄVNININGEN TILL REGISTRATION SCREEN
  onFooterLinkPress = () => {
    navigation.navigate('Registration')
}*/

  return (
    <AuthWrapper >
      <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '100%'}}
      /* style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always" Denna del gör att det blir helt vitt, oklart varför?*/
        >
      <Image
        style={styles.logo}
        source={require('../../../assets/BBicon.png')}
      />
                <Text style={styles.text}>Sign In</Text>
                <Text style={styles.smallText}>Hey Buddie! Nice to see you again.</Text>
          <TextInput 
            style = {styles.input}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            //value={email}
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            
          />
     
          <TextInput
            style = {styles.input}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            //value={password}
            onChangeText= {(text) => setPassword(text)}
            underlineColorAndroid="transparent"
                    autoCapitalize="none"
          />
         
          <TouchableOpacity
              style = {styles.button}
              onPress={() => handleSubmit()}>
                <Text>Sign in</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
      </View>
    </AuthWrapper>
  );
}

export default SignIn;

/*NAVIGERINGEN TILL REGISTRATION SCREEN
<View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
*/ 


/* denna låg under Button
<form onSubmit={handleSubmit}>
 </form>

<Button title="submit">
            LogIn
          </Button>

<div>
            <Link to="/registration">
              Register
            </Link>
          </div>
          */