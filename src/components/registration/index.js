import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AuthWrapper from './../AuthWrapper';
import { emailSignInStart, fetchAllUsers } from './../../redux/User/user.actions';
import { signUpUserStart } from './../../redux/User/user.actions';
import styles from './styles';
import { fetchBCStart, fetchChosenBCStart } from '../../redux/BookClub/bc.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  chosenUser: user.chosenUser,
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc,
  chosenClub: bookclub.chosenClub
})

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bc, chosenClub } = useSelector(mapStateBC);
  const { currentUser, chosenUser } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const groupID = [];
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser && chosenClub && chosenUser){
      navigation.navigate('ChooseBC');
    }
  }, [currentUser]
  );

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  const handleFormSubmit = event => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      groupID,
      password,
      confirmPassword
    })),
    dispatch(emailSignInStart({ email, password }))
    dispatch(fetchAllUsers())
    dispatch(fetchBCStart())
    dispatch(fetchChosenBCStart())
  }

  const onFooterLinkPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <AuthWrapper>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ width: '100%', height: '100%' }}
        >

          <Text style={styles.text}>Sign Up</Text>
          <Text style={styles.smallText}>Welcome to Book Buddies! We are glad you are joining us. </Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={displayName}
            placeholderTextColor="#aaaaaa"
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
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmit}>
            <Text>Sign up</Text>
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


