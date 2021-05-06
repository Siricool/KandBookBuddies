import React, {useEffect} from 'react';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchBCStart } from '../../redux/BookClub/bc.actions';
import { Icon } from 'react-native-elements'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
});

const BCView = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);
  const { bc } = useSelector(mapStateBC);

/*
  const dispatch = useDispatch();
  
  useEffect(() => {
  }, []); 
  */
  //console.log('BOOKCLUB'+bc)

  const getTime = () => {
    const timeStamp = Date.now();
    const fixedTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', 
    hour: '2-digit', minute: '2-digit'}).format(timeStamp);
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
  console.log('I VIEW BC !!!!!!')
  console.log(' I VEW BC : '+bc)
  const bookClub = renderElement();
  console.log('BOOKCLUB HEJ'+bookClub)
  bookClub.toString();
  console.log(bookClub)
  //console.log('BOOKCLUB VIEW '+bookClub)
  //TA EJ BORT NEDAN Start på funktion TO DO SEN:
  //console.log(bc)

  const mapClubToId = () => {
    //ta ut alla bokklubbar i en array
    //const currentClub = renderElement();
    console.log('HEJ HEJ BOOK CLUB: '+bookClub)
    let chosenClub = bc.find(club => club.groupName === bookClub.toString());
    if (chosenClub) {
      console.log('CLUB I FORLOOP'+chosenClub)
      const members = chosenClub.members;
      console.log('MEMBERS !!!!!!!!! '+members)
      const memberName = members[0].displayName;
      console.log(memberName)
      //console.log('CLUB I FORLOOP'+chosenClub.members.displayName)
      return (
        
        <Text>{memberName}</Text>
      )
    }
    /*if (bookClub == club.groupName) {
      console.log('CLUB från user'+bookClub)
      console.log('CLUB från data'+club.groupName)
      return club
    } */
  
};
  
    
  const bookUrlTest = {uri : 'https://images-na.ssl-images-amazon.com/images/I/41gznIDw41L._SX326_BO1,204,203,200_.jpg'}
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
      <ImageBackground
        style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
        <Text style={styles.whiteText}>{bookClub}</Text>
        
       <Text style={styles.textLeft}>Currently Reading </Text>
       <Text style={styles.smallBlackText}>A Key to Treehouse Living by Elliot Reed</Text>
        
        <Image
          style={styles.bookImage}
          source={ bookUrlTest}/>

        <View style={styles.whiteSquare}>
        <Text style={styles.textLeft}>Buddies in {bookClub} </Text>
        <Text style={styles.middleTextPink}><Text style={styles.capital}>{mapClubToId()} </Text></Text>
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