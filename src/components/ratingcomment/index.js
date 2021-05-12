import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Rating } from 'react-native-elements'
import {updateRating} from '../../redux/BookClub/bc.actions';

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc,
    bcCom: bookclub.comments
    // currentBC: bookclub.currentBC
});

const RatingScreen = ({ route, navigation }) => {
    //const Rating = ({ navigation }) => {
    const { bc } = useSelector(mapStateBC);
    const { book, documentID } = route.params;
    //const {documentID} = route.params;
    
    const [ star, setRating] = useState('');
    const dispatch = useDispatch();

    console.log(star)
    
    useEffect(() => {
        //mapClubToId();
    }, [bc]
    );

    /*
    const handleReview = () => {
        console.log('docID i review'+documentID)
        console.log('star i review'+star)
        console.log('book'+book.title)
        
      }*/

      const handleReview = () => {
        let chosenClub = bc.find(club => club.documentID === documentID);
        console.log('CHISENCLUB'+chosenClub)
        let counter = -1;
        if (chosenClub) {
          const books = chosenClub.bcbooks;
          return (
            
              books.map((bookObject, index) => {
                counter = counter + 1;   
                if (bookObject.id == book.id) {
                    dispatch(
                        updateRating({documentID, star, counter, bookObject})     
                  )
                  
                  navigation.navigate('BCView', chosenClub)
                }
            }  
          )) 
        }
      }  

    return (
        <View>
            <KeyboardAwareScrollView>
                <ImageBackground
                    style={styles.fillPhoto}
                    source={require('../../../assets/backg.png')}
                >
                    <Text style={styles.whiteText}>Rate book</Text>
                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>Review</Text>
                        <Text style={styles.smallText}>Write your review on {book.title} in the area below.</Text>
                        <TextInput
                            multiline
                            style={styles.inputComment}
                            placeholder="Make a review"
                            placeholderTextColor="#aaaaaa"
                            borderWidth='2'
                            borderColor="#fde3b7"
                            //onChangeText={(text) /*=> setComment(text)*/}
                            //value={comment}
                            autoCapitalize="sentences"
                        />
                    </View>
                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>Rating</Text>
                        <Text style={styles.smallText}>What did you think about the book {book.title}?</Text>
                        <Rating
                    ratingCount={5}
                    imageSize={40}
                    ratingColor={'#fde3b7'}
                    ratingBackgroundColor='#fde3b7'
                    startingValue={0}
                    onFinishRating={(ratingCount) => setRating(ratingCount)}
                    />
                    </View>

                    <TouchableOpacity
                        style={styles.smallButtonComment}
                        onPress={() => handleReview()}
                    >
                        <Text>Send review</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </KeyboardAwareScrollView>
        </View >
    )

}

export default RatingScreen;

 /*const onClickRating = (number) => {
        console.log(number)
        return (
            <View>{style = styles.starClicked}</View>
        )
    }*/

    /*const setUpRating = () => {
        var myloop = [];
        for (let i = 1; i < 6; i++) {
            myloop.push(
                <View key={i}>
                    <TouchableHighlight
                        style={styles.star}
                        underlayColor='#d679ae'
                        activeOpacity={0.8}
                        onPress={() => onClickRating(i)}>
                        <Icon
                            //reverse
                            name='ios-star'
                            type='ionicon'
                            color='#fde3b7'
                            backgroundColor='white'
                            fontSize={30}
                        />
                    </TouchableHighlight>
                </View>)
        }
        return (
            <View style={styles.rowRating}>{myloop}</View>
        )
    }*/

    /*const getRating = () => {
        <StarRating
        //type='heart'
        ratingCount={5}
        imageSize={50}
        showRating
        //onFinishRating={this.ratingCompleted}
    />
    } */