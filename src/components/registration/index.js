import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useHistory, Link } from 'react-router-native';
import { signUpUserStart } from './../../redux/User/user.actions';
//import './styles.scss';

import AuthWrapper from './../AuthWrapper';
//import FormInput from './../forms/forminput'; bytte från forminput till textinput nedan
//import Button from './../forms/button';
import { TextInput, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { styles } from '../forms/button/styles';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

const Signup = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (currentUser) {
      reset();
      history.push('/');
    }

  }, [currentUser]);

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
      password,
      confirmPassword
    }));
  }

  const configAuthWrapper = {
    headline: 'Registration'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <View /*className="formWrap"*/>

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}

          <TextInput
            placeholder="Full name"
            value={displayName}
            placeholderTextColor="#aaaaaa" 
            handleFormSubmit={displayName => setDisplayName(displayName)}
          />

          <TextInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleFormSubmit={e => setEmail(e.target.value)}
          />

          <TextInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleFormSubmit={e => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleFormSubmit={e => setConfirmPassword(e.target.value)}
          />

          <TouchableOpacity
              style = {styles.button}
              onPress={handleFormSubmit}>
                <Text>Sign up</Text>
          </TouchableOpacity>

          
      </View>
    </AuthWrapper>
  );
}

export default Signup;


/*
 <form onSubmit={handleFormSubmit}>

<Button type="submit">
            Register
          </Button>
        </form>

        <div className="links">
          <Link to="/login">
            LogIn
          </Link>
        </div>
        */
