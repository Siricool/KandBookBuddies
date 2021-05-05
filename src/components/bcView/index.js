import React from 'react';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});


const BCView = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);

  const getTime = () => {
    const timeStamp = Date.now();
   // console.log(timeStamp)
    const fixedTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', 
    hour: '2-digit', minute: '2-digit'}).format(timeStamp);
    //console.log(fixedTime);
    return ( fixedTime )
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
  //console.log('BOOKCLUB VIEW '+bookClub)
  //TA EJ BORT NEDAN Start på funktion TO DO SEN:
  /*const mapClubToId = ({}) => {
    //ta ut alla bokklubbar i en array
    const clubArray = []
    for (const club in clubArray.title) {
    if (bookClub == club) {
      return club
    }
  }
}
  const currentClub = mapClubToId();
    */

  const bookUrlTest = {uri : 'https://images-na.ssl-images-amazon.com/images/I/41gznIDw41L._SX326_BO1,204,203,200_.jpg'}
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
      <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
        <Text style={styles.text}> {bookClub} </Text>
        
        <Text style={styles.textLeft}>Currently Reading </Text>
       <Text style={styles.smallBlackText}>A Key to Treehouse Living by Elliot Reed</Text>
        
        <Image
          style={styles.bookImage}
          source={ bookUrlTest}/>

        <View style={styles.whiteSquare}>
        <Text style={styles.textLeft}>Buddies in {bookClub} </Text>
        <Text style={styles.middleTextPink}>    Test </Text><Text style={styles.middleTextPink}>    Julia </Text><Text style={styles.middleTextPink}>    Siri </Text>
        </View>

       
       <Text style={styles.textLeft}>History </Text>
       <Text style={styles.smallBlackText}>Books you've read together: </Text>
       <SafeAreaView>
       <ScrollView horizontal={true} 
       vertical={true}
       style={styles.rowBooks}>
         
              <Image //här får vi kanske loopa igenom de böcker som klubben har läst?
              style={styles.bookImageSmall}
              source={ bookUrlTest}/> 
              <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')}/>
              <Image
              style={styles.bookImageSmall}
              source={ bookUrlTest}/>
              <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')}/>
              <Image
              style={styles.bookImageSmall}
              source={ bookUrlTest}/>
              <Image
              style={styles.bookImageSmall}
              source={ bookUrlTest}/>
              <Image
              style={styles.bookImageSmall}
              source={ bookUrlTest}/>
              <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')}/>
              <Image
              style={styles.bookImageSmall}
              source={require('../../../assets/sherlock.jpg')}/>
              <Image
              style={styles.bookImageSmall}
              source={ bookUrlTest}/>
        </ScrollView>  
        </SafeAreaView>
       <Text style={styles.textLeft}> Discussion </Text>
       <View style={styles.whiteSquare}>
         <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Julia</Text>: I really liked Educated! <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
         <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Siri</Text>: Yeahh, me too :D <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
         <Text style={styles.smallMiddleText}><Text style={styles.middleTextPink}>Julia</Text>: Meeting next friday?? <Text style={styles.smallerGreyText}> {getTime()} </Text> </Text>
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

export default BCView;