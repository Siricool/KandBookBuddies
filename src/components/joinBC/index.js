import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, returnKeyType, FlatList, Item } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, ListItem, List } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'

import AuthWrapper from '../AuthWrapper';
import styles from './styles.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
});
console.log('bcgrejs');

const JoinBC = ({ navigation }) => {
    const [searching, setSearch] = useState('');
    const { bc } = useSelector(mapStateBC);

    const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    console.log(bc)
    const handleJoinBC = () => {

    }

    /*  const getData = () => {
          const arr = []
          {
              bc.map((club, index) => {
                  arr.push(club);
              })
          }
          return (arr)
      }*/

    renderBC = ({ item }) => {
        return (
            <View>
                <Text style={styles.text}>{(item.groupName)}</Text>
            </View>
        )
    }

    console.log(bc)
    return (
        <AuthWrapper>

            <View style={styles.container}>


                <Text style={styles.text}>Join Book Club</Text>
                <SearchBar
                    round
                    inputContainerStyle={styles.input}
                    containerStyle={styles.inputcontainer}
                    lightTheme
                    //value={search}
                    onChangeText={(text) => setSearch(text)}
                />


                <FlatList
                    data={bc}
                    renderItem={renderBC}
                    keyExtractor={(item, index) => index.toString()}
                />


            </View>



        </AuthWrapper>

    );

}

export default JoinBC;

/*<SafeAreaView>
                    <List>
                    <FlatList
                        data={bc}
                        keyExtractor={item => item.groupName}
                        renderItem={({ bc }) => (
                            <ListItem>
                                {bc.item.groupName}
                            </ListItem>
                        )
                        }
                    />
                    </List>
                    </SafeAreaView>*/

//<View>
//{bc.map((club) => {
//    console.log("inne i map"+club)
//    return (
//        <View>
//             <Text> {club.groupName}</Text>
//        </View>
//    )
//})}
//</View>