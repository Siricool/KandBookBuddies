import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, returnKeyType} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FlatList, ScrollView} from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

import AuthWrapper from '../AuthWrapper';
import styles from './styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';

const JoinBC = ({navigation}) => {
    const [searching, setSearch] = useState('');

    useEffect(() => {

    });

    const handleJoinBC = () => {

    }

    return (
        <AuthWrapper>

            <View style={styles.container}>
           
            <Text style={styles.text}>Join Book Club</Text>
            <SafeAreaView>
                <SearchBar 
                    round
                    inputContainerStyle={styles.input}
                    containerStyle={styles.inputcontainer}                 
                    lightTheme 
                    //value={search}
                    onChangeText = {(text) => setSearch(text)}
                />

                <FlatList
                
                />
             </SafeAreaView>   

            
            
            </View>
            
           </AuthWrapper> 
       
    
    );
}

export default JoinBC;