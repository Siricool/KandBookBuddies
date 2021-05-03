import React, { useEffect } from 'react';
import { Image, TouchableHighlight, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';
import { fetchBooksStart } from '../../redux/Books/book.actions.js';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapStateBook = ({ booksData }) => ({
  books: booksData.books
});

const StartPage = ({ navigation }) => {

  const { currentUser } = useSelector(mapState);
  const { books } = useSelector(mapStateBook);
  //console.log('first books log'+books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchBooksStart()
    );
  }, []);

  const recommendBook = () => {
    const numbOfBooks = books.length;
    const randNumb = Math.floor(Math.random() * (numbOfBooks)) + 1;
    let chosenBook = books.find(book => book.id === randNumb);

    if (chosenBook) {
      const bookurl = { uri: chosenBook.picture }
      return (
        <View>
          <Text style={styles.middleText}>{chosenBook.title}</Text>
          <Text style={styles.smallText}> by {chosenBook.author}</Text>
          
          <Image source={bookurl}
            style={styles.bookImage} />
        </View>
      )
    }
  };

  /*
    const recommendTitle = (recBook) => {
     // const recBook = recommendBook();
      if (recBook) {
      return (
      <Text>{recBook.title}</Text>
      )
      }
    }
    const recommendPic = (recBook) => {
      //const recBook = recommendBook();
      if (recBook) {
        const bookurl = {uri: recBook.picture}
      return (
      <Image  source = {bookurl} 
        style = {{height: 200, width: 150, margin: 10 }} />
      )
      
      }
    }*/


  return (
    <View className="StartPage" style={styles.container}>
      <KeyboardAwareScrollView
        style={{ width: '100%', height: '88%' }}
      >        
        <Text style={styles.buddietext}> Buddies Updates  </Text>
     
        <Text style={styles.smallText}>Hey <Text style={styles.middleText}>{currentUser.displayName}</Text>! Here are some updates from your buddies.</Text>
        <Text style={styles.textLeft}> Book Buddy of the Week  </Text>
        <Text style={styles.smallText}> Your friend Carola has read a lot! </Text>
        <Image
          style={styles.userImage}
          source={require('../../../assets/carola.jpg')}
        />

        <Text style={styles.textLeft}> STS book club is currently reading </Text>
        <Text style={styles.middleText}>The Adventures of Sherlock Holmes</Text>
        <Text style={styles.smallText}> by Sir Arthur Conan Doyle </Text>
        <Image
          style={styles.bookImage}
          source={require('../../../assets/sherlock.jpg')}
        />

        <Text style={styles.textLeft}> {currentUser.displayName}, check out this book!  </Text>

        <Text > {recommendBook()} </Text>

        

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