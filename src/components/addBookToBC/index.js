import React, { useEffect } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBCStart, bookInBC } from '../../redux/BookClub/bc.actions';
import styles from '../styles.js'

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser
});
const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
})

const AddBookToBC = ({ route, navigation }) => {
    const { currentUser } = useSelector(mapState);
    const { updatedUser } = useSelector(mapState);
    const { bc } = useSelector(mapStateBC);
    const book = route.params;
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

    const mapBC = () => {
        let arr = renderElement(); // användarens klubbar
        let saveClub = []
        arr.map((name, index) => {
            bc.forEach((club) => {
                if (club.groupName == name) {
                    saveClub.push(club)
                }
            })
        })
        return (
            saveClub.map((club, index) => {
                return (
                    <View key={club.documentID}>
                        <TouchableOpacity style={styles.coolButton}
                            onPress={() => handlePress(club)}>
                            <Text style={styles.buttonText}>
                                {club.groupName}
                            </Text>
                        </TouchableOpacity>
                    </View>
                );
            })
        );
    };

    const handlePress = (club) => {
        const booksInClub = club.bcbooks; 
        let bookExists = booksInClub.find(bcbook => bcbook.title === book.title);
        if (bookExists != undefined) {
            alert("The book is already in your club.")
        }
        else {
            dispatch(bookInBC({ club, book }))
        }
     navigation.navigate('Search');
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
                <ImageBackground
                    style={styles.fillPhoto}
                    source={require('../../../assets/backg.png')}>

                    <Text style={styles.whiteText}> Choose Book Club</Text>
                    <Text style={styles.textLeft}> Which club do you want to add the book to?</Text>
                    {mapBC()}
                    <Image
                        style={styles.bookLogo}
                        source={require('../../../assets/whiteicon.png')}
                    />
                </ImageBackground>
            </KeyboardAwareScrollView>
        </View>
    )

}

export default AddBookToBC;