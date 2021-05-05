import React from 'react';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});


const BCOverview = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);

  const renderElement = () => {
    if (updatedUser != null) {
      return <Text> {updatedUser.groupID} </Text>;
    }
    else {
      return <Text> {currentUser.groupID} </Text>;
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
      <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
        <Text style={styles.text}> My Book Clubs </Text>

        <TouchableOpacity style={styles.coolButton}
        onPress={() => navigation.navigate('BCView')}> 
          <Text style={styles.buttonText}>
            {renderElement()}
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </KeyboardAwareScrollView>

      <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('MyProfile')}>
        <Icon
                        reverse
                        name='ios-person'
                        type='ionicon'
                        color='#fde3b7'

                    />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
        <Icon
                        reverse
                        name='ios-book'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('StartPage')}>
        <Icon
                        reverse
                        name='ios-home'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Search')}>
        <Icon
                        reverse
                        name='ios-search'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Settings')}>
        <Icon
                        reverse
                        name='ios-settings'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
      </View>


    </View>
  );
}

export default BCOverview;