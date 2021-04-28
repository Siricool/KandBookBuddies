import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles.js';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const LoadingPage = ({ navigation }) => {
    const { currentUser } = useSelector(mapState);
    if (currentUser != null) {
        navigation.navigate('StartPage')
    }
    return (
        <View style={styles.container} >
            <KeyboardAwareScrollView
                style={{ width: '100%', height: '100%' }}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/BBicon.png')}
                />
            </KeyboardAwareScrollView>
        </View>
    )
};

export default LoadingPage;