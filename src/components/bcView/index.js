import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import { createCommentStart } from '../../redux/BookClub/bc.actions';
import styles from '../styles';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc,
  bcCom: bookclub.comments
});

const BCView = ({ route, navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { bc } = useSelector(mapStateBC);
  const { bcCom } = useSelector(mapStateBC);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { groupName } = route.params;
  const { documentID } = route.params;

  useEffect(() => {
    mapClubToId();

  }, [bc, bcCom]
  );

  const getTime = () => {
    const timeStamp = Date.now();
    const fixedTime = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
    }).format(timeStamp);
    return (fixedTime)
  }

  const mapClubToId = () => {
    let chosenClub = bc.find(club => club.groupName === groupName);
    if (chosenClub) {
      const members = chosenClub.members;
      return (
        <ScrollView vertical={true} style={styles.rowBooks}>
          {members.map((member, index) => {
            return (
              <View key={member.email}>
                <Text style={[styles.middleTextOrange, styles.capital]}>- {member.displayName}</Text>
              </View>
            )
          })}
        </ScrollView>)
    }
  };

  const mapComment = () => {
    const scrollViewRef = useRef();
    if (bcCom.groupName != undefined) {
      let chosenClub = bcCom
      if (chosenClub) {
        const comments = chosenClub.comments;
        return (
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            {comments.map((comment, index) => {
              return (
                <View key={comment.comment}>
                  <Text style={styles.smallerGreyText}> {comment.time} </Text>
                  <Text style={[styles.middleTextPink, styles.capital]}> {comment.user}:
                  <Text style={styles.smallMiddleText}> {comment.comment} </Text>
                    </Text>
                </View>
              )})}
          </ScrollView>
        )}}
    else {
      let chosenClub = bc.find(club => club.groupName === groupName);
      if (chosenClub) {
        const comments = chosenClub.comments;
        return (
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            {comments.map((comment, index) => {
              return (
                <View key={comment.comment}>
                  <Text style={styles.smallerGreyText}> {comment.time} </Text>
                  <Text style={[styles.middleTextPink, styles.capital]}> {comment.user}:
                  <Text style={styles.smallMiddleText}> {comment.comment} </Text></Text>
                </View>
              )})}
          </ScrollView>
        )}}
  };

  const handleCreateComment = () => {
    const timeStamp = getTime();
    setComment('');
    let chosenClub = bc.find(club => club.groupName === groupName);
    if (chosenClub) {
      const clubID = chosenClub.documentID;
      dispatch(createCommentStart({
        comment,
        currentUser,
        clubID,
        timeStamp
      }))}
  }

  const goToRatingScreen = (book) => {
    navigation.navigate('RatingScreen', {book, documentID} )
  }

  const getBooks = () => {
    let chosenClub = bc.find(club => club.groupName === groupName);
    if (chosenClub) {
      const books = chosenClub.bcbooks;
      return (
        <ScrollView horizontal={true}
          vertical={true}
          style={styles.rowBooks}>
          {books.map((book, index) => {
            
            if (book.read === false) {
              return (
                <View key={book.id}>
                  <View style={styles.square}>
                    <Text style={styles.smallThinTextOrange}> {book.title} </Text>
                  </View>
                <Text style={styles.smallerText}> {book.author} </Text>
                <Image
                  style={styles.bookImageSmall}
                  source={{ uri: book.picture }} />
                 <TouchableOpacity
                        style={styles.smallButton}
                        onPress={() => goToRatingScreen(book)}>
                        <Text> Finished reading </Text>
                 </TouchableOpacity>  
              </View>
            )
            }
          })}
        </ScrollView>)
    }
  }

  const getHistoryBooks = () => {
    let chosenClub = bc.find(club => club.groupName === groupName);
    if (chosenClub) {
      const books = chosenClub.bcbooks;
      return (
        <ScrollView horizontal={true}
          vertical={true}
          style={styles.rowBooks}>
          {books.map((book, index) => {
            if (book.read === true) {
              return (
                <View key={book.id}>
                  <TouchableOpacity
                    onPress={() => goToRatingScreen(book)}>
                    <Image
                      style={styles.bookImageSmall}
                      source={{ uri: book.picture }} />
                  </TouchableOpacity>
                </View>
              )}})}
        </ScrollView>)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
          <Text style={styles.whiteText}><Text style={styles.capital}>{groupName}</Text></Text>

          <Text style={styles.textLeft}>Currently Reading </Text>
          <View style={styles.whiteMediumSquare}>
            {getBooks()}
          </View>

          <Text style={styles.textLeft}>Buddies in {groupName}</Text>
          <View style={styles.whiteSquare}>
            <Text>{mapClubToId()}</Text>
          </View>

          <Text style={styles.textLeft}>History </Text>
          <Text style={styles.smallBlackText}>Books you've read together: </Text>
          {getHistoryBooks()}

          <Text style={styles.textLeft}> Discussion </Text>
          <View style={styles.whiteMediumSquare}>
            <Text>{mapComment()}</Text>
          </View>
          <Text style={styles.textLeft}>Make a comment</Text>
          <TextInput
            multiline
            style={styles.inputComment}
            placeholder="Make a comment"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setComment(text)}
            value={comment}
            autoCapitalize="sentences"
          />

          <TouchableOpacity
            style={styles.smallButtonComment}
            onPress={() => handleCreateComment()}
          >
            <Text>Post comment</Text>
          </TouchableOpacity>


          <Text style={styles.textLeft}> Questions </Text>
          <View style={styles.whiteSquare}>
            <Text style={styles.smallMiddleText}>- What is the significance of the title? Did you find it meaningful, why or why not?</Text>
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


