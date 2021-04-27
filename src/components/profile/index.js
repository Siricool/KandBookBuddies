import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useHistory, Link, TouchableHighlight } from 'react-router-native';
import { signUpUserStart } from './../../redux/User/user.actions';
import styles from './styles';

import AuthWrapper from './../AuthWrapper';
//import FormInput from './../forms/forminput'; bytte från forminput till textinput nedan
//import Button from './../forms/button';
import { Image, TextInput, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//import { styles } from '../forms/button/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const MyProfile = () => {
    const { currentUser } = useSelector(mapState);

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
                <Text style={styles.text}>My Profile</Text>
                <Text style={styles.smallText}>{currentUser.fullName}</Text>
                <Text style={styles.middleText}>My Stats</Text>
                <Text style={styles.middleText}>My Book Clubs</Text>
                <Text style={styles.middleText}>My Books</Text>
                <View style={styles.row}>
                    <Image
                        style={styles.menuToolbar}
                        source={require('../../../assets/BBicon.png')}
                    />
                    <TouchableHighlight onPress={() => onFooterLinkPress()}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/BBicon.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onFooterLinkPress()}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/BBicon.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onFooterLinkPress()}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/BBicon.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => onFooterLinkPress()}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/BBicon.png')}
                        />
                    </TouchableHighlight>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default MyProfile;

