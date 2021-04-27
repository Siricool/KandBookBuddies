import React from 'react';

import { Image, TextInput, TouchableHighlight, TouchableOpacity, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './styles.js';

const Toolbar = ({navigation}) => {


return (
    <View style={styles.container}>
        <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
                style={styles.menuToolbar}
                source={require('../../../assets/Profile_picture.png')}
            />
        </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/BookClubs_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/House_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/Search_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/Settings_picture.png')}
                />
            </TouchableHighlight>
        </View>

    </View>
)

}

export default Toolbar;














/*import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import StartPageScreen from '../../screens/startpage/StartPageScreen'
import BCOverviewScreen from '../../screens/bookclub/BookClubsOverviewScreen'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name = 'StartPageScreen' component ={StartPageScreen} />
        <Tab.Screen name = 'BCOverviewScreen' component ={BCOverviewScreen} />
    </Tab.Navigator>
}

export default TabNavigator
*/





/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app'
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {store} from '../../redux/createStore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import BookClubScreen from '../../screens/bookclub/BookClubScreen'
import StartPageScreen from '../../screens/startpage/StartPageScreen'

const Tab = createBottomTabNavigator();


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const Toolbar = () => {

    return (
<NavigationContainer>
        <Tab.Navigator >
            <Tab.Screen
                name="StartPageScreen" component={StartPageScreen}

               
            />

        </Tab.Navigator>
        </NavigationContainer>


    )

}
export default Toolbar;

*/
/*

 options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}


<Tab.Screen name="Profile" component={BookClubScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("BookClubScreen")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    ),
                }} />

 <Tab.Screen name="Search" component={StartPageScreen} navigation={this.props.navigation}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={26} />
                    ),
                }} />

 <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                    ),
                }} />


*/
/*
// const { currentUser } = useSelector(mapState);
const navigation = useNavigation();
onFooterLinkPress = () => {
    //här är ett test så knapp på image fungerar. Denna ska bytas ut till settings, search view osv. Denna går till LogInScreen nu
    //bara för att testa att onPress fungerar på image
    console.log("in i onFooter")
    navigation.navigate('BookClubScreen')
}

return (
    <View style={styles.container}>
        <View style={styles.row}>
        <TouchableHighlight onPress={() => navigation.navigate('BCOverview')}>
            <Image
                style={styles.menuToolbar}
                source={require('../../../assets/Profile_picture.png')}
            />
        </TouchableHighlight>
            <TouchableHighlight onPress={() => onFooterLinkPress()}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/BookClubs_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => onFooterLinkPress()}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/House_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => onFooterLinkPress()}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/Search_picture.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => onFooterLinkPress()}>
                <Image
                    style={styles.menuToolbar}
                    source={require('../../../assets/Settings_picture.png')}
                />
            </TouchableHighlight>
        </View>
        <Text> </Text>

    </View>
)


*/

