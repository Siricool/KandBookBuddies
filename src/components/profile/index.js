import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useHistory, Link } from 'react-router-native';
import { signUpUserStart } from './../../redux/User/user.actions';
import styles from './styles';

import AuthWrapper from './../AuthWrapper';
//import FormInput from './../forms/forminput'; bytte från forminput till textinput nedan
//import Button from './../forms/button';
import { Image, TextInput, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//import { styles } from '../forms/button/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

