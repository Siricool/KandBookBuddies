import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthWrapper from '../AuthWrapper';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createBCStart } from '../../redux/BookClub/bc.actions';
import {updateGroupsForUser} from '../../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser,
    userErr: user.userErr
});

const mapClub = ({bookclub}) => ({
    currentBC: bookclub.currentBC
})

const CreateBC = ({ navigation }) => {
    const [groupName, setGroupName] = useState('');
    const { currentUser, useErr, updatedUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const members = [currentUser];
    const { currentBC} = useSelector(mapClub);

    useEffect(() => {
       /* if (currentBC)
         { updateUserInfo()
            console.log('HELLLLLO1')   
        }*/
        console.log('I INDEX'+updatedUser)
        if (updatedUser){
            console.log('HELLLLLO')
            navigation.navigate('StartPage')
        }

        },[updatedUser]
    );

 /*   useEffect(() => {
        console.log('HEJ'+updatedUser)
    if (updatedUser){
        console.log('HELLLLLO')
        navigation.navigate('StartPage')
    }}, [updatedUser]
    );*/

    

    const handleCreateBC = () => {
        // event.preventDefault();
        
        dispatch(createBCStart({
            groupName,
            members
        }));
        
        dispatch(updateGroupsForUser({groupName}));
    }

    return (
        <AuthWrapper>
            <View style={styles.container}>
                <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
                    <Text style={styles.text}>Create Book Club</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name of Book Club"
                        
                        placeholderTextColor='#aaaaaa'
                        onChangeText={(text) => setGroupName(text)}
                        underlineColorAndroid='transparent'
                        autoCapitalize='none'
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleCreateBC}>
                        <Text>Create Book Club</Text>
                    </TouchableOpacity>

                </KeyboardAwareScrollView>
            </View>
        </AuthWrapper>
    );
}

export default CreateBC;