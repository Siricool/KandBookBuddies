import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { emailSignInStart, fetchAllUsers } from './../../redux/User/user.actions';
import AuthWrapper from './../AuthWrapper/index';
import styles from './styles.js';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  chosenUser: user.chosenUser
});

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, chosenUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser && chosenUser){
      navigation.navigate('StartPage');
    }
  }, [currentUser, chosenUser]
  );

  const handleSubmit = () => { 
    dispatch(emailSignInStart({ email, password }))
    dispatch(fetchAllUsers())
  }

  const onFooterLinkPress = () => {
    navigation.navigate('Signup')
  }

  return (
    <AuthWrapper >
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ width: '100%', height: '100%' }}
        /* style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always" Denna del gör att det blir helt vitt, oklart varför?*/
        >
          <Image
            style={styles.logo}
            source={require('../../../assets/BBicon.png')}
          />
          <Text style={styles.text}>Sign In</Text>
          <Text style={styles.smallText}>Hey Buddy! Nice to see you again.</Text>
          <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            //value={email}
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"

          />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#aaaaaa"
            //value={password}
            onChangeText={(text) => setPassword(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text>Sign in </Text>
          </TouchableOpacity>

          
          <View style={styles.footerView}>
            <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
          </View>
      
        </KeyboardAwareScrollView>
        
       
                 
      </View>
    </AuthWrapper>
  );
}

export default SignIn;



