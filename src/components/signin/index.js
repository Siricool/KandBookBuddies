import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Link, useHistory } from 'react-router-native';
import { emailSignInStart } from './../../redux/User/user.actions';

//import './styles.scss'

import AuthWrapper  from './../AuthWrapper/index';
//import FormInput from './../forms/forminput'; bytte från forminput till textinput nedan
//import Button from './../forms/button';
import { TextInput, TouchableOpacity,  StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../forms/button/styles';


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
    if (currentUser) {
      //resetForm();
      //history.push('/');
    }
    
  }, currentUser);

  //ev ta bort
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = () => { //här va en async
    //preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

 
  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <View /*className="formWrap"*/>
          <TextInput
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            //value={email}
            onChangeText={(text) => setEmail(text)}
            
          />

          <TextInput
            placeholder="password"
            placeholderTextColor="#aaaaaa"
            //value={password}
            onChangeText= {(text) => setPassword(text)}
            
          />

          <TouchableOpacity
              style = {styles.button}
              onPress={() => handleSubmit()}>
                <Text>Sign in</Text>
          </TouchableOpacity>
          <Text>{currentUser.fullName}</Text>
      </View>
    </AuthWrapper>
  );
}

export default SignIn;


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