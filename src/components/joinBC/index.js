import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, returnKeyType, FlatList, Item, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, ListItem, List } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'

import AuthWrapper from '../AuthWrapper';
import styles from './styles.js';

import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
});

const JoinBC = ({ navigation }) => {
    const [searching, setSearch] = useState('');
    const { bc } = useSelector(mapStateBC);

    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    console.log(bc)
    const handleJoinBC = () => {

    }

    renderHeader = () => {

       
        return(
            
            <SearchBar
                round
                inputContainerStyle={styles.input}
                containerStyle={styles.inputcontainer}
                lightTheme
                placeholder="Search bookclub to join..."
                //value={search}
                onChangeText={(text) => setSearch(text)}
            />
            )
    }

    renderBC = ({ item }) => {
        return (
            <View style={styles.row}>              
                <Text style={styles.middleText}>{(item.groupName)}</Text>
                <TouchableOpacity style={styles.button} >
                <Text style={styles.smallText}>Join</Text>
                </TouchableOpacity>
               
            </View>
        )
    }

    console.log(bc)
    return (
        <AuthWrapper>
           
            <View style={styles.container} >
            
                      
                <SafeAreaView >
                <FlatList
                    data={bc}
                    renderItem={renderBC}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={renderHeader}
                   
                />
                </SafeAreaView>
            </View>
        </AuthWrapper>

    );

}

export default JoinBC;
