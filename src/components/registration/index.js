import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { emailSignInStart } from './../../redux/User/user.actions';

import AuthWrapper from './../AuthWrapper';
import { signUpUserStart } from './../../redux/User/user.actions';
import styles from './styles';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

//const Signup = props => {
const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const groupID = null;
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    /*if (currentUser) {
      reset();
      history.push('/');
    }

  }, [currentUser]);*/
    currentUser
  });

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }

  }, [userErr]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      groupID,
      password,
      confirmPassword
    }))
    
    
  }

  const handleSignIn = () => {
    dispatch(emailSignInStart({ email, password }));
  }

  const handleCreate = () => {
    navigation.navigate('CreateBC')
  }

  const configAuthWrapper = {
    headline: 'Registration'
  };

  const onFooterLinkPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <AuthWrapper /*{...configAuthWrapper}*/>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          /*style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always"*/
          style={{ width: '100%', height: '100%' }}
        >

          <Text style={styles.text}>Sign Up</Text>
          <Text style={styles.smallText}> Welcome to Book Buddies! We are glad you are joining us. </Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={displayName}
            placeholderTextColor="#aaaaaa"
            /*handleFormSubmit={displayName => setDisplayName(displayName)}*/
            onChangeText={(text) => setDisplayName(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            /*handleFormSubmit={e => setEmail(e.target.value)}*/
            onChangeText={(text) => setEmail(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            /*handleFormSubmit={e => setPassword(e.target.value)}*/
            onChangeText={(text) => setPassword(text)}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            /*handleFormSubmit={e => setConfirmPasswsord(e.target.value)}*/
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmit}>
            <Text>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}>
            <Text>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleCreate}>
            <Text>
              Create or join book club!
            </Text>
          </TouchableOpacity>

          


          <View style={styles.footerView}>
            <Text style={styles.footerText}> Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign in!</Text></Text>
          </View>

          <Image
            style={styles.logo}
            source={require('../../../assets/BBicon.png')}
          />

          

        </KeyboardAwareScrollView>
      </View>
    </AuthWrapper>
  );
}

export default Signup;


/*
LÄGG IN NAVIGATION I PROPS




*/
