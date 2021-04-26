import React from 'react';
import { Image, TextInput, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';
import { NavigationContainer } from '@react-navigation/native';

//const UserProfile = props => {
//const { currentUser } = props;
//const { displayName } = currentUser;

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const StartPage = () => {

  const { currentUser } = useSelector(mapState);

  return (
    <View className="StartPage" style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '100%' }}
      >
        <Text style={styles.text}> BUDDIES UPDATES  </Text>

        <Text style={styles.smallText}>Hey {currentUser.fullName}! Here are some updates from your buddies.</Text>

        <Text style={styles.textLeft}> Book Buddy of the week  </Text>
        <Text style={styles.smallText}> Your friend Carola has read a lot! </Text>
        <Image
          style={styles.userImage}
          source={require('../../../assets/carola.jpg')}
        />

        <Text style={styles.textLeft}> STS book club is currently reading </Text>
        <Text style={styles.smallText}> Sherlock Holmes </Text>
        <Image
          style={styles.bookImage}
          source={require('../../../assets/sherlock.jpg')}
        />

        <Text style={styles.textLeft}> {currentUser.fullName}, check out this book!  </Text>
        <Image
          style={styles.bookImage}
          source={require('../../../assets/sherlock.jpg')}
        />

      </KeyboardAwareScrollView>
    </View>
  );
}

export default StartPage;





/*{currentUser.fullName}

<TouchableOpacity
              style = {styles.button}
              onPress={() => goBackPressed()}>
                <Text> Go back </Text>
          </TouchableOpacity>

*/