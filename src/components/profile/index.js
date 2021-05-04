import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles';
import {selectCartItems} from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser
});

const mapStateCart = createStructuredSelector({
    cartItems: selectCartItems
});

const MyProfile = ({navigation}) => {
    const { currentUser } = useSelector(mapState);
    const { updatedUser } = useSelector(mapState);
    const { cartItems } = useSelector(mapStateCart);

    const renderElement = () => {
        if (updatedUser != null) {
          return <Text> {updatedUser.groupID} </Text>;
        }
        else {
          return <Text> {currentUser.groupID} </Text>;
        }
      };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
                <Text style={styles.text}><Text style={styles.capital}>{currentUser.displayName}</Text>'s Profile</Text>
                <Text style={styles.middleTextOrange}></Text> 
                <Text style={styles.middleText}>My Stats</Text>
                <Text style={styles.middleText}>My Book Clubs</Text>
                <View style={styles.left}>
                <TouchableOpacity style={styles.coolButton}
                    onPress={() => navigation.navigate('BCView')}> 
                    <Text style={styles.buttonText}>
                        {renderElement()}
                    </Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.middleText}>My Read Books</Text>
                
                <SafeAreaView style={styles.whiteBigSquare}>   
                 <Text style={styles.middleText}>My Wish List </Text>
                    <ScrollView vertical={true} style={styles.rowBooks}>
                        {cartItems.map((cartItem, index) => {
                            const bookurl = { uri: cartItem.picture }
                            return (
                                <View key = {cartItem.title} style={styles.orangeSquare}>
                                    <Text  style={styles.smallTextOrange}> {cartItem.title} </Text>
                                    <Image 
                                    style={styles.bookImageSmall}
                                    source={bookurl} /> 
                                    <Text style={styles.smallerText}> {cartItem.author} </Text>
                                </View>    
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
               

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

export default MyProfile;

