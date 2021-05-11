
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'
import { fetchBooksStart } from '../../redux/Books/book.actions.js';
import { addBook, addBookClub, addBookRead } from '../../redux/Cart/cart.actions'
import { bookInBC } from '../../redux/BookClub/bc.actions';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles.js'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});
const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
})
const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});

const Search = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);
  const { books } = useSelector(mapStateBook);
  const { bc } = useSelector(mapStateBC);
  console.log('BC I SEARCH' + bc)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchBooksStart()
    );
  }, []);

  const configAddToCart = (book) => {
    if (!book) return;
    dispatch(
      addBook(book)
    )
  };
  const configAddToRead = (book) => {
    if (!book) return;
    dispatch(
      addBookRead(book)
    )
  };

  const renderElement = () => {
    if (updatedUser != null) {
      return updatedUser.groupID
    }
    else {
      return currentUser.groupID
    }
  };

  const bookClub = renderElement();
  bookClub.toString();

  /*
  const configAddToClub = (book) => {
    const clubName = (bookClub.toString())
    console.log(clubName)
    console.log('BC !!!!!!!!!!!!!!!!!!!!B ')
    console.log(bc)
    {bc.map((club, index) => {
      console.log(bc)
        if (club.groupName == clubName) {
          if (!book) return;
          dispatch(
            addBookClub(book)
          )
          dispatch(
            bookInBC({ club, book })
          )
        }
      })
    }
  };
  */
  const configAddToClub = (book) => {
    console.log('INNAN SKICKAD'+book)
    if (book) {
      navigation.navigate('AddBookToBC', book)
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '90%' }}
      >
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>

          <Text style={styles.whiteText}>Look for Books</Text>

          <Text style={styles.textLeft}> Drama </Text>
          <SafeAreaView style={styles.whiteBigSquare}>
            <ScrollView horizontal={true}
              vertical={true}
              style={styles.rowBooks}>
              {books.map((book, index) => {
                if (book.genre == 'Drama') {
                 
                  return (
                    <View key={book.id} >
                      <View style={styles.square}>
                        <Text style={styles.smallThinTextOrange}> {book.title} </Text>
                        <Text style={styles.smallerText}> {book.author} </Text>
                      </View>
                      <Image
                        style={styles.bookImageSmall}
                        source={{ uri: book.picture }} />
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToCart(book)} >
                        <Text> Add to Wish List </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToRead(book)} >
                        <Text> Add to Read Books </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToClub(book)} >
                        <Text> Add to Club </Text>
                      </TouchableOpacity>
                    </View>

                  )
                }
              })}
            </ScrollView>
          </SafeAreaView>

         





          <Image
            style={styles.bookLogo}
            source={require('../../../assets/whiteicon.png')}
          />
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


/*
 <Text style={styles.textLeft}> Fantasy </Text>
          <SafeAreaView style={styles.whiteBigSquare}>
            <ScrollView horizontal={true}
              vertical={true}
              style={styles.rowBooks}>
              {books.map((book, index) => {
                console.log('BOOK GENRE' + book.genre)
                if (book.genre == 'Fantasy') {
                  console.log('HEJ')
                  const bookurl = { uri: book.picture }
                  return (
                    <View key={book.id} >
                      <View style={styles.square}>
                        <Text style={styles.smallThinTextOrange}> {book.title} </Text>
                        <Text style={styles.smallerText}> {book.author} </Text>
                      </View>
                      <Image
                        style={styles.bookImageSmall}
                        source={bookurl} />
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToCart(book)} >
                        <Text> Add to Wish List </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToRead(book)} >
                        <Text> Add to Read Books </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToClub(book)} >
                        <Text> Add to Club </Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
              })}
            </ScrollView>
          </SafeAreaView>

          <Text style={styles.textLeft}> Mystery </Text>
          <SafeAreaView style={styles.whiteBigSquare}>
            <ScrollView horizontal={true}
              vertical={true}
              style={styles.rowBooks}>
              {books.map((book, index) => {
                console.log('BOOK GENRE' + book.genre)
                if (book.genre == 'Mystery') {
                  console.log('HEJ')
                  const bookurl = { uri: book.picture }
                  return (
                    <View key={book.id}>

                      <Text style={styles.smallThinTextOrange}> {book.title} </Text>
                      <Text style={styles.smallerText}> {book.author} </Text>
                      <Image
                        style={styles.bookImageSmall}
                        source={bookurl} />
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToCart(book)} >
                        <Text> Add to Wish List </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToRead(book)} >
                        <Text> Add to Read Books </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => configAddToClub(book)} >
                        <Text> Add to Club </Text>
                      </TouchableOpacity>
                    </View>

                  )
                }
              })}
            </ScrollView>
          </SafeAreaView>
          <Text style={styles.textLeft}> Romance </Text>
          <SafeAreaView style={styles.whiteBigSquare}>
            <ScrollView horizontal={true}
              vertical={true}
              style={styles.rowBooks}>
              {books.map((book, index) => {
                console.log('BOOK GENRE' + book.genre)
                if (book.genre == 'Romance') {
                  console.log('HEJ')
                  const bookurl = { uri: book.picture }
                  return (
                    <View>
                      <View key={book.id} >
                        <Text style={styles.smallThinTextOrange}> {book.title} </Text>
                        <Text style={styles.smallerText}> {book.author} </Text>
                        <Image
                          style={styles.bookImageSmall}
                          source={bookurl} />
                        <TouchableOpacity
                          style={styles.smallButton}
                          onPress={() => configAddToCart(book)} >
                          <Text> Add to Wish List </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.smallButton}
                          onPress={() => configAddToRead(book)} >
                          <Text> Add to Read Books </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.smallButton}
                          onPress={() => configAddToClub(book)} >
                          <Text> Add to Club </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                }
              })}
            </ScrollView>
          </SafeAreaView>
*/          

