import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
})

const ChooseBC = ({ navigation }) => {
    const { bc } = useSelector(mapStateBC);

    const dispatch = useDispatch();

    useEffect(() => {
      if(bc!=undefined && bc.length>0) {
          navigation.navigate('JoinBC')
      }

   }, [bc]
    )

    const handleCreate = () => {
        navigation.navigate('CreateBC')
      }
    const handleJoin = () => {
        dispatch(
          fetchBCStart()
        )
      }
    
    return (

        <View style={styles.container} >
            <KeyboardAwareScrollView
                style={{ width: '100%', height: '100%' }}>

        <TouchableOpacity
            style={styles.button}
            onPress={() => handleCreate()}>
            <Text>Create new book club </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleJoin()}>
            <Text>Join book club </Text>
          </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default ChooseBC;