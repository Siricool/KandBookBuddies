
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'

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
           <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
          
         <Text style={styles.text}> Search </Text>
       
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


