import React from 'react';
import { Image, TouchableHighlight, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const StartPage = ({ navigation }) => {
  console.log('hej i start')
  const { currentUser } = useSelector(mapState);


  console.log('i start 2 ' + currentUser.displayName)
  return (
    <View className="StartPage" style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '100%' }}
      >
        <Text style={styles.text}> BUDDIES UPDATES  </Text>
        <Text style={styles.smallText}>Hey {currentUser.displayName}! Here are some updates from your buddies.</Text>
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

        <Text style={styles.textLeft}> {currentUser.displayName}, check out this book!  </Text>
        <Image
          style={styles.bookImage}
          source={require('../../../assets/sherlock.jpg')}
        />
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

export default StartPage;





/*

        <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
                style={styles.menuToolbar}
                source={require('../../../assets/Profile_picture.png')}
            />
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
                style={styles.menuToolbar}
                source={require('../../../assets/Profile_picture.png')}
            />
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
                style={styles.menuToolbar}
                source={require('../../../assets/Profile_picture.png')}
            />
        </TouchableHighlight>
</View>


{currentUser.fullName}

<TouchableOpacity
              style = {styles.button}
              onPress={() => goBackPressed()}>
                <Text> Go back </Text>
          </TouchableOpacity>

*/