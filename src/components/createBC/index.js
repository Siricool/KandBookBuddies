import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthWrapper from '../AuthWrapper';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createBCStart } from '../../redux/BookClub/bc.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const CreateBC = ({ navigation }) => {
    const [groupName, setGroupName] = useState('');
    const { currentUser, useErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const members = [currentUser];

    useEffect(() => {
        currentUser
    });

    const handleCreateBC = () => {
        // event.preventDefault();
        dispatch(createBCStart({
            groupName
        }));
        if (currentUser.groupName != null) {
            navigation.navigate('StartPage')
        }
    }

    return (
        <AuthWrapper>
            <View style={styles.container}>
                <KeyboardAwareScrollView style={{ width: '100%', height: '100%' }}>
                    <Text style={styles.text}>Create Book Club</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name of Book Club"
                        value={groupName}
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