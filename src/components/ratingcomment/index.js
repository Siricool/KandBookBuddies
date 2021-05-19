import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Rating } from 'react-native-elements';

import { updateRating } from '../../redux/BookClub/bc.actions';
import styles from '../styles';

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc,
    bcCom: bookclub.comments,
    updatedRatingClub: bookclub.rating
});

const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

const RatingScreen = ({ route, navigation }) => {
    const { bc, updatedRatingClub } = useSelector(mapStateBC);
    const { currentUser} = useSelector(mapState);
    const { book, documentID, groupName } = route.params;
    const [star, setRating] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
 
    }, [bc]
    );

    const handleReview = () => {
        let chosenClub = bc.find(club => club.documentID === documentID);
        let counter = -1;

        if (chosenClub) {
            const books = chosenClub.bcbooks;
            return (
                books.map((bookObject, index) => {
                    counter = counter + 1;
                    if (bookObject.id == book.id) {
                        dispatch(
                            updateRating({ documentID, star, counter, bookObject, comment, currentUser })
                        )
                        setComment('');
                    }
                }
                ))
        }
    };

    const mapComment = () => {
        const scrollViewRef = useRef();
        let name = groupName;
        if (updatedRatingClub.groupName != undefined && updatedRatingClub.groupName == groupName) {
          let chosenClub = updatedRatingClub
          if (chosenClub) {
            let chosenBook = chosenClub.bcbooks.find(bookBC => bookBC.id === book.id);
            if (chosenBook){
            const comments = chosenBook.comments;
            return (
              <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {comments.map((comment, index) => {
                  return (
                    <View key={comment.comment}>
                        <Text style={styles.smallText}>
                      <Text style={[styles.middleTextPink, styles.capital]}>{comment.user}:</Text>
                      <Text> {comment.comment} </Text>
                      </Text>
                    </View>
                  )})}
              </ScrollView>
            )}}}
        else {
          let chosenClub = bc.find(club => club.documentID === documentID);
          if (chosenClub) {
            let chosenBook = chosenClub.bcbooks.find(bookBC => bookBC.id === book.id);
            if (chosenBook){
            const comments = chosenBook.comments;
            return (
              <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {comments.map((comment, index) => {
                  return (
                    <View key={comment.comment}>
                      <Text style={styles.smallText}>
                      <Text style={[styles.middleTextPink, styles.capital]}>{comment.user}:</Text>
                      <Text> {comment.comment} </Text>
                      </Text>
                    </View>
                  )})}
              </ScrollView>
            )}}}
      };

    const averageRating = () => {
        let average = 0;
        let sumAverage = 0;
        if (updatedRatingClub.groupName != undefined) {
            let chosenClub = updatedRatingClub;
            if (chosenClub) {
                const books = chosenClub.bcbooks;
                return (
                    books.map((bookObject, index) => {
                        if (bookObject.id == book.id) {
                            let numbOfRatings = bookObject.rating.length;
                            let ratingsBC = bookObject.rating;
                            ratingsBC.map((rating, index) => {
                                sumAverage += rating;
                            })
                            average = sumAverage / numbOfRatings;
                            let roundedAverage = Math.round(average)
                            return (
                                roundedAverage
                            )
                        }
                    })
                )
            }
        }
        else {
            let chosenClub = bc.find(club => club.documentID === documentID);
            if (chosenClub) {
                const books = chosenClub.bcbooks;
                return (
                    books.map((bookObject, index) => {
                        if (bookObject.id == book.id) {
                            let numbOfRatings = bookObject.rating.length;
                            let ratingsBC = bookObject.rating;
                            ratingsBC.map((rating, index) => {
                                sumAverage += rating;
                            })
                            average = sumAverage / numbOfRatings;
                            let roundedAverage = Math.round(average)
                            return (
                                roundedAverage
                            )
                        }
                    })
                )
            }
        }
    }

    const getAverage = () => {
        let average = averageRating();
        if (average.length >= 0){
        return (
            <View>
            <Text style={styles.bigTextPink}>{average}</Text>
            </View>
        )
        }
        else{
            return(
            <View>
            <Text style= {styles.smallText}>No ratings yet</Text>
            </View>
            )
        }
    }

    return (
        <View>
            <KeyboardAwareScrollView>
                <ImageBackground
                    style={styles.fillPhoto}
                    source={require('../../../assets/backg.png')}
                >
                    <Text style={styles.whiteText}>Club Discussion</Text>
                    <Image style={styles.bookImageMedium} source={{uri: book.picture}} />

                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>Club Average Rating</Text>
                       
                        <Text  style={styles.center} >{getAverage()} </Text>
                    </View>

                    <View style={styles.whiteSquare}>
                        <Text style={styles.textLeft}>Club Reviews</Text>
                        <Text>{mapComment()}</Text>
                    </View>

                    <Text style={styles.textLeft}>What did you think?</Text>
                    <View style={styles.whiteSquare}>
                        <Text></Text>
                        <Text style={styles.smallText}>Give <Text style={styles.middleTextPink}>{book.title} </Text>a star rating!</Text>
                        <Rating
                            ratingCount={5}
                            imageSize={40}
                            ratingColor={'#fde3b7'}
                            ratingBackgroundColor='#fde3b7'
                            startingValue={0}
                            onFinishRating={(ratingCount) => setRating(ratingCount)}
                        />
                    
                    
                         <Text></Text>
                        <Text style={styles.smallText}>Leave a comment about the book.</Text>
                        <TextInput
                            multiline
                            style={styles.inputComment}
                            placeholder="Make a review"
                            placeholderTextColor="#aaaaaa"
                            borderWidth='2'
                            borderColor="#fde3b7"
                            onChangeText={(text) => setComment(text)}
                            value={comment}
                            autoCapitalize="sentences"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.smallButtonComment}
                        onPress={() => handleReview()}
                    >
                        <Text>Send review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.coolButtonTwo}
                        onPress={() =>  navigation.navigate('BCView')}
                    >
                        <Text> Back to {groupName}</Text>
                    </TouchableOpacity>


                    <Image
                        style={styles.bookLogo}
                        source={require('../../../assets/whiteicon.png')}
                    />
                </ImageBackground>
            </KeyboardAwareScrollView>
        </View >
    )

}

export default RatingScreen;

