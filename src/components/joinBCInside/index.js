import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import AuthWrapper from '../AuthWrapper';
import styles from '../joinBC/styles';

import { joinBCStart } from '../../redux/BookClub/bc.actions';
import { updateGroupsForUser } from '../../redux/User/user.actions';


const mapStateBC = ({ bookclub }) => ({
    bc: bookclub.bc
});

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    updatedUser: user.updatedUser,
});

const JoinBCInside = ({ navigation }) => {
    const { bc } = useSelector(mapStateBC);
    const { currentUser, updatedUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [clubNameSet, setClubName] = useState('');




    useEffect(() => {       
        if (currentUser.groupID.includes(clubNameSet)) {
            navigation.navigate('BCOverview')
        }

        if(updatedUser) {
        if (updatedUser.groupID.includes(clubNameSet)){
            navigation.navigate('BCOverview')
        } }
    }, [currentUser, updatedUser]);


    const handleJoinBC = ( club, clubName ) => {
        setClubName(clubName)
        const groupName = clubName.toString();
        dispatch(joinBCStart({club, currentUser}));
        dispatch(updateGroupsForUser({groupName}));
    }

    renderHeader = () => {
        return (
            <Text style={styles.titleText}>Join a Bookclub</Text>)
    }

    return (
        <AuthWrapper>
            <View style={styles.container}> 
                <FlatList
                    data={bc}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <Text style={styles.middleText}>{(item.groupName)}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleJoinBC(item.documentID, item.groupName)} >
                                <Text style={styles.smallText}>Join</Text>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                    keyExtractor={(item) => item.documentID.toString()}
                    ListHeaderComponent={renderHeader}
                />

            </View>
        </AuthWrapper>
    );
}

export default JoinBCInside;