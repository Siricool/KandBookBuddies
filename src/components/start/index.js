import React, { useEffect } from 'react';
import { Image, TouchableHighlight, View, Text, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles.js';
import { fetchBooksStart } from '../../redux/Books/book.actions.js';
import {addBook} from '../../redux/Cart/cart.actions'
import { TouchableOpacity } from 'react-native-gesture-handler';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});

const StartPage = ({ navigation }) => {
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

  const recommendBook = () => {
    const numbOfBooks = books.length;
    //console.log('ANTAL BÖCKER'+numbOfBooks)
    const randNumb = Math.floor(Math.random() * (numbOfBooks)) + 1;
    //console.log('RANDOM  BÖCKER'+randNumb)
    let chosenBook = books.find(book => book.id === randNumb);
    if (chosenBook) {
      console.log('random chosen BOOK '+chosenBook.title)
      const bookurl = { uri: chosenBook.picture }
      return (
        <View>
          <Text style={styles.middleTextOrange}>{chosenBook.title}</Text>
          <Text style={styles.smallText}> by {chosenBook.author}</Text>
          <Image source={bookurl}
            style={styles.bookImage} />
          <TouchableOpacity
          style={styles.smallButton}
           onPress={() => configAddToCart(chosenBook)} >
            <Text > Add to My List </Text>
          </TouchableOpacity>
        </View>
      )
    }
  };

  return (
    <View className="StartPage" >
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '95%' }}>        
        <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
        
       <Text style={styles.whiteText}>Buddies Updates</Text>

        <View style={styles.whiteSquare}>
        <Text style={styles.textLeft}><Text style={styles.capital}> {currentUser.displayName}</Text>, check out this book!  </Text>
        <Text > {recommendBook()} </Text>
        </View>

        <View style={styles.whiteSquare}>
        <Text style={styles.textLeft}> Book Buddy of the Week  </Text>
        <Text style={styles.smallText}> Your friend Carola has read a lot! </Text>
        <Image
          style={styles.userImage}
          source={require('../../../assets/carola.jpg')}/>
        </View>

        <View style={styles.whiteSquare}>
        <Text style={styles.textLeft}> STS book club is currently reading </Text>
        <Text style={styles.middleTextOrange}>The Adventures of Sherlock Holmes</Text>
        <Text style={styles.smallText}> by Sir Arthur Conan Doyle </Text>
        <Image
          style={styles.bookImage}
          source={require('../../../assets/sherlock.jpg')}/>
        </View>
        <Image
            style={styles.bookLogo}
            source={require('../../../assets/whiteicon.png')}
          />
</ImageBackground>
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

export default StartPage;





/*

<View>
            {books.map((book, index) => {
                const bookurl = {uri: book.picture}

                return (
                    <View key = {book.id}>
                         <Image  source = {bookurl}
                        style = {{height: 200, width: 150, margin: 10 }} />
                         <Text > {book.title}, {book.author} </Text>
                    </View>
                )
            })}
        </View>





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