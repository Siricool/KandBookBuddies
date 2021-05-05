import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableHighlight, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser
});

const mapStateCart = createStructuredSelector({
    cartItems: selectCartItems
});

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
  })

const MyProfile = ({ navigation }) => {
    const { currentUser } = useSelector(mapState);
    const { updatedUser } = useSelector(mapState);
    const { cartItems } = useSelector(mapStateCart);
    const { bc } = useSelector(mapStateBC);

    useEffect(() => {
        dispatch(
          fetchBCStart()
        );
      }, []); 

    const renderElement = () => {
        if (updatedUser != null) {
            return <Text> {updatedUser.groupID} </Text>;
        }
        else {
            return <Text> {currentUser.groupID} </Text>;
        }
    };

    const handlePress = () => {
        navigation.navigate('BCView');
      }

    const bookUrlTest = { uri: 'https://images-na.ssl-images-amazon.com/images/I/41gznIDw41L._SX326_BO1,204,203,200_.jpg' }
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
                        <Text style={styles.middleTextPink}>       34               1</Text>
                    </View>

                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>My Book Clubs</Text>
                        <View style={styles.left}>
                            <TouchableOpacity style={styles.coolButton}
                                onPress={() => navigation.navigate('BCView') }>
                                <Text style={styles.buttonText}>
                                    {renderElement()}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>My Read Books</Text>
                        <SafeAreaView>
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
                        </SafeAreaView>
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
                        */