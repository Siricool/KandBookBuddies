import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles';

import { Image, TouchableHighlight, View, Text } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const MyProfile = ({navigation}) => {
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
                    <TouchableHighlight onPress={() => navigation.navigate('MyProfile')}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/Profile_picture.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/BookClubs_picture.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('StartPage')}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/House_picture.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/Search_picture.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate('Settings')}>
                        <Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/Settings_picture.png')}
                        />
                    </TouchableHighlight>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default MyProfile;

