import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { emailSignInStart, fetchAllUsers } from './../../redux/User/user.actions';
import {fetchChosenBCStart} from './../../redux/BookClub/bc.actions';
import AuthWrapper from './../AuthWrapper/index';
import styles from './styles.js';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  chosenUser: user.chosenUser
});

const mapStateBC = ({ bookclub }) => ({
 // bc: bookclub.bc,
  chosenClub: bookclub.chosenClub
})

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
 // const history = useHistory();
  const { currentUser, chosenUser } = useSelector(mapState);
  const { bc, chosenClub } = useSelector(mapStateBC);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (currentUser && chosenUser && chosenClub){
      navigation.navigate('StartPage');
    }
  }, [currentUser, chosenUser, chosenClub]
  );

  const handleSubmit = () => { 
    dispatch(emailSignInStart({ email, password }))
    if (currentUser){
      dispatch(fetchAllUsers())
    dispatch(fetchChosenBCStart())
    }
    
  }

  const onFooterLinkPress = () => {
    navigation.navigate('Signup')
  }
  const fetchData = () =>{
    dispatch(fetchAllUsers())
    dispatch(fetchChosenBCStart())
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



