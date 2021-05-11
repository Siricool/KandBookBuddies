import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc,
    bcCom: bookclub.comments
   // currentBC: bookclub.currentBC
  });

const Rating = ({ route, navigation }) => {
//const Rating = ({ navigation }) => {
    const { bc } = useSelector(mapStateBC);


const book = route.params;

useEffect(() => {
  //  mapClubToId();
  }, [bc]
  );

return (
    <View>
    <Text>{book.title}</Text>
    </View>
)

}

export default Rating;