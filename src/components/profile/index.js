import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles';
import { selectCartItems, selectReadingItems } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableHighlight, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser
});

const mapStateCart = createStructuredSelector({
    cartItems: selectCartItems,
    readingItems: selectReadingItems
});

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
  })

const MyProfile = ({ navigation }) => {
    const { currentUser } = useSelector(mapState);
    const { updatedUser } = useSelector(mapState);
    const { cartItems } = useSelector(mapStateCart);
    const { readingItems } = useSelector(mapStateCart);
    const { bc } = useSelector(mapStateBC);
    const numbOfRead = readingItems.length;    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
          fetchBCStart()
        );
      }, []); 

    const renderElement = () => {
        if (updatedUser != null) {
            return updatedUser.groupID;
        }
        else {
            return currentUser.groupID;
        }
    };

    const handlePress = (club) => {
        navigation.navigate('BCView', club);
      }

      const mapBC = () =>{
        let arr = renderElement(); // användarens klubbar
        
        let saveClub = []
        //JÄMFÖR MED BC O SPARA HELA CLUBINFON I NY ARRAY 
        arr.map((name,index) => {
          console.log('HEJ'+name)
          
          bc.forEach((club) => {
            if (club.groupName == name){
              saveClub.push(club)
            }
          })
    
          console.log(saveClub)
    
       
        } )
    
        return(
          saveClub.map((club, index) => {
            return(
              <View key = {club.documentID}> 
              
              <TouchableOpacity style={styles.coolButton}
                onPress={() => handlePress(club) }>
                <Text style={styles.buttonText}>
                  {club.groupName}
                </Text>
              </TouchableOpacity>
              
              </View>
            );
          })
        )
      }

    return (
        <View>
            <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
                <ImageBackground
                    style={styles.fillPhoto}
                    source={require('../../../assets/backg.png')}>
                    <Text style={styles.whiteText}><Text style={styles.capital}>{currentUser.displayName}</Text></Text>
                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>My Stats</Text>
                        <Text style={styles.smallText}>Read books:   Clubs: </Text>
                        <Text style={styles.middleTextPink}>       {numbOfRead}               1</Text>
                    </View>

                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>My Book Clubs</Text>
                        <View style={styles.left}>
                        <View>{mapBC()}</View>
                            
                        </View>
                    </View>

                    <View style={styles.whiteBigSquare}>
                        <Text style={styles.textLeft}>My Read Books</Text>

                        <ScrollView vertical={true} style={styles.rowBooks}>
                            {readingItems.map((readingItem, index) => {
                                const bookurl = { uri: readingItem.picture }
                                
                                return (
                                    <View key={readingItem.title} style={styles.orangeSquare}>
                                            
                                        <Image
                                            style={styles.bookImageSmall}
                                            source={bookurl} />
                                        <Text style={styles.smallTextOrange}> {readingItem.title} </Text>
                                        <Text style={styles.smallerText}> {readingItem.author} </Text>
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>

                    <SafeAreaView style={styles.whiteBigSquare}>
                        <Text style={styles.textLeft}>My Wish List </Text>
                        <ScrollView vertical={true} style={styles.rowBooks}>
                            {cartItems.map((cartItem, index) => {
                                const bookurl = { uri: cartItem.picture }
                                return (
                                    <View key={cartItem.title} style={styles.orangeSquare}>

                                        <Image
                                            style={styles.bookImageSmall}
                                            source={bookurl} />
                                        <Text style={styles.smallTextOrange}> {cartItem.title} </Text>
                                        <Text style={styles.smallerText}> {cartItem.author} </Text>
                                    </View>
                                )
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
                        backgroundColor='white'
                    />
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('BCOverview')}>
                    <Icon
                        reverse
                        name='ios-book'
                        type='ionicon'
                        color='#fde3b7'
                        backgroundColor='white'
                    />
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('StartPage')}>
                    <Icon
                        reverse
                        name='ios-home'
                        type='ionicon'
                        color='#fde3b7'
                        backgroundColor='white'
                    />
                </TouchableHighlight>
                <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Search')}>
                    <Icon
                        reverse
                        name='ios-search'
                        type='ionicon'
                        color='#fde3b7'
                        backgroundColor='white'
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

export default MyProfile;

/*<Image
                            style={styles.menuToolbar}
                            source={require('../../../assets/House_picture.png')}

                            <Image
                        style={styles.menuToolbar}
                        source={require('../../../assets/BookClubs_picture.png')}
                    />
                        />

                         <Image
                        style={styles.menuToolbar}
                        source={require('../../../assets/Settings_picture.png')}
                    />
                    <Image
                        style={styles.menuToolbar}
                        source={require('../../../assets/Search_picture.png')}
                    />
                    <Image
                        style={styles.menuToolbar}
                        source={require('../../../assets/Profile_picture.png')}
                    />

                    <TouchableOpacity style={styles.coolButton}
                                onPress={() => navigation.navigate('BCView') }>

                                <Text style={styles.buttonText}>
                                    {renderElement()}
                                </Text>
                            </TouchableOpacity>
                        */