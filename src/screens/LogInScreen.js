import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './LoginStyle';

import firebase from 'firebase/app'
/*import { firebase } from '../firebase/config'*/

/*export default function App() {
  return (
    <View style={styles.container}>
      //<Text>Hejhej testing</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default class LogInScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onFooterLinkPress = () => {
        this.props.navigation.navigate('RegistrationScreen')
    }

    onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => { alert(error.message); });
        /*console.log(this.state.email);*/
        this.props.navigation.navigate('StartPageScreen')
    }

    render() 
    {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/BBicon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => {this.setState({email: text})} }
                    value={this.state.email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => {this.setState({password: text})} }
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
    }
}

/*export default function LogInScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen')
    }

    const onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.") //hit har den kommit
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.navigate('StartPageScreen')
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/BBicon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}*/


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde3b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
