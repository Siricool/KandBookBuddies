
import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements'
import { fetchBooksStart } from '../../redux/Books/book.actions.js';
import { addBook, addBookRead } from '../../redux/Cart/cart.actions'
import styles from '../styles.js'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});

const Search = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { books } = useSelector(mapStateBook);
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

  const booksDrama = () => {
    
  }
  
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '90%' }}
      >
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>

          <Text style={styles.whiteText}>Look for Books</Text>
         
    <Text style = {styles.textLeft}> Drama </Text>
     {books.map((book, index) => {
      if (book.genre == 'Drama') {
        const bookurl = { uri: book.picture }
      return (
        <View style={styles.center}>
          <View style={styles.width}>
            <View style={styles.whiteSquare}>
              <Text style={styles.smallTextOrange}> {book.title} </Text>
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
            </View>
          </View>
        </View>
      )
      }
    })}

      <Text style = {styles.textLeft}> Fantasy </Text>
            {books.map((book, index) => {
      console.log('BOOK GENRE'+ book.genre)
      if (book.genre == 'Fantasy') {
        console.log('HEJ')
        const bookurl = { uri: book.picture }
      return (
        <View style={styles.center}>
          <View style={styles.width}>
            <View style={styles.whiteSquare}>
              <Text style={styles.smallTextOrange}> {book.title} </Text>
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
            </View>
          </View>
        </View>
      )
      }
    })}
    <Text style = {styles.textLeft}> Mystery </Text>
            {books.map((book, index) => {
      console.log('BOOK GENRE'+ book.genre)
      if (book.genre == 'Mystery') {
        console.log('HEJ')
        const bookurl = { uri: book.picture }
      return (
        <View style={styles.center}>
          <View style={styles.width}>
            <View style={styles.whiteSquare}>
              <Text style={styles.smallTextOrange}> {book.title} </Text>
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
            </View>
          </View>
        </View>
      )
      }
    })}
    <Text style = {styles.textLeft}> Romance </Text>
            {books.map((book, index) => {
      console.log('BOOK GENRE'+ book.genre)
      if (book.genre == 'Romance') {
        console.log('HEJ')
        const bookurl = { uri: book.picture }
      return (
        <View style={styles.center}>
          <View style={styles.width}>
            <View style={styles.whiteSquare}>
              <Text style={styles.smallTextOrange}> {book.title} </Text>
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
            </View>
          </View>
        </View>
      )
      }
    })}

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


