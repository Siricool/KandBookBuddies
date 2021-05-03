import React, { useEffect } from 'react';
import { TouchableOpacity, View, Text, returnKeyType} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView, SearchBar } from 'react-native-gesture-handler';

import AuthWrapper from '../AuthWrapper';
import styles from './styles.js';

const JoinBC = ({navigation}) => {


    /*useEffect(() => {

    });

    const handleJoinBC = () => {

    }*/

    return (
        <AuthWrapper>
            <View style={styles.container}>
            <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
            <Text style={styles.text}>Join Book Club</Text>

            
            </KeyboardAwareScrollView>
            </View>
            
           </AuthWrapper> 
       
    
    );
}

export default JoinBC;