import React, { useEffect, useState } from 'react';
import { Image, TouchableHighlight, View, Text, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles.js';
import { fetchBooksStart } from '../../redux/Books/book.actions.js';
import { addBook, addBookRead, nextBook } from '../../redux/Cart/cart.actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';



const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  chosenUser: user.chosenUser
});

const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc,
  chosenClub: bookclub.chosenClub
})

const StartPage = ({ navigation }) => {
  const { currentUser, chosenUser } = useSelector(mapState);
  const { books } = useSelector(mapStateBook);
  const { bc, chosenClub } = useSelector(mapStateBC);
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
        <Text style={styles.smallBlackText}>The Buddy <Text style={[styles.capital, styles.middleTextPink]}>{userName}</Text> loves clubbing and is enjoying these book clubs:</Text>
        {bookclubs.map((club, index) =>{
          return(
            <View key={index}>
                <Text style={[styles.middleTextOrangeInspo, styles.capital]}>
                  {club}
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


  const bookFromOtherBC = () => {
    let currentlyReading = [];
      let books = chosenClub.bcbooks;
      for (book in books) {
        let tempBook = chosenClub.bcbooks[book];
        if (tempBook.read == false) {
          currentlyReading.push(tempBook)
        }
      }
      let numbOfClubBooks = currentlyReading.length;
      if (numbOfClubBooks > 0) {
        const randBookNumb = Math.floor(Math.random() * (numbOfClubBooks));
        let chosenClubBook = currentlyReading[randBookNumb];
        return (
          <View>
            <Text style={styles.smallBlackText}>The Club 
            <Text style={[styles.capital, styles.middleTextPink]}> {chosenClub.groupName}</Text> is currently reading: </Text>
            <View style={styles.rowSettings}>
              <View style={[styles.column, styles.maxSquare]}>
                <View>
                  <Text style={styles.middleTextOrange}>{chosenClubBook.title}</Text>
                  <Text style={styles.authorText}>by {chosenClubBook.author}</Text>
                  <Text style={styles.height} />
                </View>
              </View>
              <View>
                <Image source={{ uri: chosenClubBook.picture }}
                  style={styles.bookImageMediumLeft} />
              </View>
            </View>
          </View>
        )
      }
      else {
        return (
          <Text>{bookFromOtherBC()}</Text>
        )
      }

  }

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
          <View style={styles.margins}>
          <Icon
              name='ios-star'
              type='ionicon'
              color='black'
              style={styles.icon}
            /></View>
            <Text style={styles.textLeft}>Buddy Inspiration</Text>
            <View>{buddyWeek()}</View>
          </View>

          <View style={styles.whiteSquare}>
          <View style={styles.margins}>
          <Icon
              name='ios-book'
              type='ionicon'
              color='black'
              style={styles.icon}
            /></View>
            <Text style={styles.textLeft}>Club Inspiration</Text>
            <Text>{bookFromOtherBC()}</Text>
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



