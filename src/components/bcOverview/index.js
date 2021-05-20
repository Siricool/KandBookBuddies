import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { fetchBCStart } from '../../redux/BookClub/bc.actions';
import styles from '../styles';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
})

const BCOverview = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);
  const { bc } = useSelector(mapStateBC);
  const dispatch = useDispatch();

  const renderElement = () => {
    if (updatedUser != null) {
      return updatedUser.groupID;
    }
    else {
      return currentUser.groupID;
    }
  };

  useEffect(() => {
    dispatch(
      fetchBCStart()
    );
  }, [updatedUser, currentUser]);

  const mapBC = () => {
    let arr = renderElement(); 
    let saveClub = []
    arr.map((name, index) => {
      bc.forEach((club) => {
        if (club.groupName == name) {
          saveClub.push(club)}
        })
    })
    return (
      saveClub.map((club, index) => {
        return (
          <View key={club.documentID}>
            <TouchableOpacity style={styles.coolButton}
              onPress={() => handlePress(club)}>
              <Text style={styles.buttonText}>
                {club.groupName}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }))
  }

  const handlePress = (club) => {
    if (bc != undefined && bc.length > 0) {
      navigation.navigate('BCView', club);
    }}

  const handleJoin = () => {
    navigation.navigate('JoinBCInside');
  }

  const handleCreate = () => {
    navigation.navigate('CreateBCInside');
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
          <Text style={styles.whiteText}>My Book Clubs</Text>
          <View>{mapBC()}</View>

          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>Longing for a new book club?</Text>
            <View style={styles.rowBC}>
              <TouchableOpacity style={styles.smallButtonBC}
                onPress={() => handleJoin()}>
                <Text style={styles.buttonText}>
                  Join a book club
            </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.smallButtonBC}
                onPress={() => handleCreate()}>
                <Text style={styles.buttonText}>
                  Create a book club
            </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text> </Text>
          <Text> </Text>


          <Image
            style={styles.bookLogo}
            source={require('../../../assets/whiteicon.png')}
          />

            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
        </ImageBackground>
      </KeyboardAwareScrollView>

      <View style={styles.row}>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('MyProfile')}>
          <Icon
            reverse
            name='ios-person'
            type='ionicon'
            color='#fde3b7'

          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('BCOverview')}>
          <Icon
            reverse
            name='ios-book'
            type='ionicon'
            color='#fde3b7'
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('StartPage')}>
          <Icon
            reverse
            name='ios-home'
            type='ionicon'
            color='#fde3b7'
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Search')}>
          <Icon
            reverse
            name='ios-search'
            type='ionicon'
            color='#fde3b7'
          />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Settings')}>
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
