import React, { useEffect, useState } from 'react';
import { Image, TouchableHighlight, View, Text, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles.js';
import { fetchBooksStart } from '../../redux/Books/book.actions.js';
import { addBook, addBookRead, nextBook } from '../../redux/Cart/cart.actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { fetchAllUsers } from '../../redux/User/user.actions'


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  chosenUser: user.chosenUser
});

const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});


const StartPage = ({ navigation }) => {
  const { currentUser, chosenUser } = useSelector(mapState);
  const { books } = useSelector(mapStateBook);
  const [random, setRandom] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchBooksStart()
    );
  
  }, [chosenUser]);

 

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

  const changeBook = (book) => {
    dispatch(
      nextBook(book)
    );
  };

  const buddyWeek = () => {    
    if (chosenUser && chosenUser.displayName != undefined){
    const userName = chosenUser.displayName
    const bookclubs = chosenUser.groupID;
      return (
        <View>
        <Text style={styles.smallBlackText}><Text style={styles.capital}>{userName}</Text> loves clubbing and is enjoying these bookclubs</Text>
        {bookclubs.map((club, index) =>{
          return(
            <View key={index}>
                <Text style={styles.middleTextOrangeInspo}>
                  - {club}
                </Text>
            </View>
          )
        })}
        <Text> </Text>
        </View>
      )
    }
  }

  const recommendBook = () => {
    const numbOfBooks = books.length;
    const randNumb = Math.floor(Math.random() * (numbOfBooks)) + 1;
    let chosenBook = books.find(book => book.id === randNumb);
    if (chosenBook) {
     
      const bookurl = { uri: chosenBook.picture }
      return (
        <View>
          <Text style={styles.middleTextOrange}>{chosenBook.title}</Text>
          <Text style={styles.authorText}>by {chosenBook.author}</Text>

          <View style={styles.rowSettings}>
            <View>
            <Image source={bookurl}
              style={styles.bookImage} />
              </View>
            <View style={styles.column}>
              <View>
              <TouchableOpacity
                style={styles.smallButtonSquare}
                onPress={() => changeBook(chosenBook)} >
                <Text style={styles.smallTextOrange}>Next</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => configAddToCart(chosenBook)} >
                <Text> Add to My List </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => configAddToRead(chosenBook)} >
                <Text> Add to Read Books </Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
    }
  };

  return (
    <View className="StartPage" >
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '90%' }}>
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>

          <Text style={styles.whiteText}>Buddies Updates</Text>

          <View style={styles.whiteBigSquare}>
            <Text style={styles.textLeft}><Text style={styles.capital}>{currentUser.displayName}</Text>, check out this book!  </Text>
            <Text>{recommendBook()}</Text>

          </View>

          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>Buddy Inspiration<Text style={styles.textItalic}> </Text></Text>
            <View>{buddyWeek()}</View>
          </View>

          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>See other clubs<Text style={styles.textItalic}> - under development  </Text></Text>
          </View>

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

export default StartPage;



