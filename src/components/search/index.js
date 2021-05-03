
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksStart } from '../../redux/Books/book.actions.js';

import styles from './styles.js'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const mapStateBook = ({ booksData }) => ({
    books: booksData.books 
  });

const Search = ({ navigation }) => {
  const { books } = useSelector(mapStateBook);
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(
          fetchBooksStart()
      );
  }, []); //empty array av nån anledning med dispatch "very important"
  console.log('test'+books)
  //console.log('test2'+books[0].title)
  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView
        style={{width: '100%', height: '88%'}}
        >
         <Text style={styles.text}> Search </Text>
       
        <View>
            {books.map((book) => {
                const bookurl = {uri: book.picture}
                return (
                    <View>
                         <Image source = {bookurl} 
                        style = {{height: 200, width: 150, margin: 10 }} />
                         <Text> {book.title}, {book.author} </Text>
                    </View>
                )
            })}
        </View>

        </KeyboardAwareScrollView>

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


