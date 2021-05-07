import React, { useEffect } from 'react';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'

import { selectCartItems, selectReadingItems, selectClubItems } from '../../redux/Cart/cart.selectors';
import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
});

const mapStateCart = createStructuredSelector({
  cartItems: selectCartItems,
  readingItems: selectReadingItems,
  clubItems: selectClubItems
});

const BCView = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);
  const { bc } = useSelector(mapStateBC);
  const { cartItems } = useSelector(mapStateCart);
  const { readingItems } = useSelector(mapStateCart);
  const { clubItems } = useSelector(mapStateCart);
  console.log('Cart ITEMS ' + cartItems)
  console.log('reading iTEMS ' + readingItems)
  console.log('CLUBITEMS ' + clubItems)

  const memberList = [];

  /*
    const dispatch = useDispatch();
    
    useEffect(() => {
    }, []); 
    */
  //console.log('BOOKCLUB'+bc)

  const getTime = () => {
    const timeStamp = Date.now();
    const fixedTime = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    }).format(timeStamp);
    return (fixedTime)
  }

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

  const mapClubToId = () => {
    //ta ut alla bokklubbar i en array
    //const currentClub = renderElement();
    let chosenClub = bc.find(club => club.groupName === bookClub.toString());
    if (chosenClub) {
      const members = chosenClub.members;
      return (
        <ScrollView vertical={true} style={styles.rowBooks}>
          {members.map((member, index) => {
            return (
              <View key={member.email}>
                <Text style={styles.middleTextOrange}><Text style={styles.capital}>- {member.displayName}</Text></Text>
              </View>
            )
          })}
        </ScrollView>)

      /*console.log('MEMBERS !!!!!!!!! '+members)
      for (let i=0; i<members.length; i++) {
        console.log(members[i].displayName)
          memberList.push(members[i].displayName);
          
      }
      return (
        <Text>{memberList}</Text> )*/
      //console.log('CLUB I FORLOOP'+chosenClub.members.displayName)
      // return (

      // <Text>{memberList}</Text>
      //)
    }
    /*if (bookClub == club.groupName) {
      console.log('CLUB från user'+bookClub)
      console.log('CLUB från data'+club.groupName)
      return club
    } */

  };


  const bookUrlTest = { uri: 'https://images-na.ssl-images-amazon.com/images/I/41gznIDw41L._SX326_BO1,204,203,200_.jpg' }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
          <Text style={styles.whiteText}><Text style={styles.capital}>{bookClub}</Text></Text>

          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>Currently Reading </Text>
            <ScrollView horizontal={true}
              vertical={true}
            >
              {clubItems.map((clubItem, index) => {
                const bookurl = { uri: clubItem.picture }
                return (
                  <View key={clubItem.title} style={styles.center}>    
                    <Text style={styles.smallTextOrange}> {clubItem.title} </Text>
                    <Text style={styles.smallerText}> {clubItem.author} </Text>
                    <Image
                      style={styles.bookImageMedium}
                      source={bookurl} />
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>Buddies in {bookClub}</Text>
            <Text>{mapClubToId()}</Text>
          </View>

          <Text style={styles.textLeft}>History </Text>
          <Text style={styles.smallBlackText}>Books you've read together: </Text>
          <ScrollView horizontal={true}
            vertical={true}
            style={styles.rowBooks}>
            <Image //här får vi kanske loopa igenom de böcker som klubben har läst?
              style={styles.bookImageSmall}
              source={bookUrlTest} />
            <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')} />
            <Image
              style={styles.bookImageSmall}
              source={bookUrlTest} />
            <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')} />
            <Image
              style={styles.bookImageSmall}
              source={bookUrlTest} />
            <Image
              style={styles.bookImageSmall}
              source={bookUrlTest} />
            <Image
              style={styles.bookImageSmall}
              source={bookUrlTest} />
            <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')} />
            <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')} />
            <Image
              style={styles.bookImageSmall}
              source={bookUrlTest} />

          </ScrollView>
          <Text style={styles.textLeft}> Discussion </Text>
          <View style={styles.whiteSquare}>
            <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Julia</Text>: I really liked Educated! <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
            <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Siri</Text>: Yeahh, me too :D <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
            <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Julia</Text>: Meeting next friday?? <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
          </View>
          <Text style={styles.textLeft}> Questions </Text>
          <View style={styles.whiteSquare}>
            <Text style={styles.smallMiddleText}>- What is the significance of the title? Did you find it meaningful, why or why not?
</Text>
            <Text style={styles.smallMiddleText}>- What did you think of the writing style and content structure of the book?</Text>
            <Text style={styles.smallMiddleText}>- How did the book make you feel? What emotions did it evoke?</Text>
            <Text style={styles.smallMiddleText}>- What did you learn from this book?</Text>
            <Text style={styles.smallMiddleText}>- Was the book satisfying to read? Why or why not?</Text>
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

export default BCView;

