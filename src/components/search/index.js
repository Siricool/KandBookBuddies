
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles.js'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });



const Search = ({ navigation }) => {
  
  const { currentUser } = useSelector(mapState);

  
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '90%'}}
        >
         <Text style={styles.text}> Search </Text>
       

        </KeyboardAwareScrollView>

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
          <TouchableHighlight onPress={() => navigation.navigate('Search')}>
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
     
    </View>
  );
}

export default Search;


/*
{books.map((product, index) => {
                const {
                    bookAuthor,
                    bookGenre,
                    bookPicture,
                    bookTitle,

                } = book;
                return (
                    //<Image src = {bookPicture} />
                    <Text> {bookTitle} </Text>
                )
            })}
            */


