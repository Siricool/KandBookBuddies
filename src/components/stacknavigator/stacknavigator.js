import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import LogInScreen from "../../screens/login/LogInScreen"
import Registration from "../../screens/registration/RegistrationScreen"
import StartPageScreen from "../../screens/startpage/StartPageScreen"
import BCOverviewScreen from "../../screens/bookclub/BookClubsOverviewScreen"
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, TouchableOpacity,  StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';



const Stack = createStackNavigator()

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const StackNavigator = () => {
  //här lägger jag in nytt
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

console.log("i stacknavigator")
    return (
        <Stack.Navigator>   
          {currentUser ? (
              <Stack.Screen name="BCOverviewScreen" component={BCOverviewScreen}/>
              //<Stack.Screen name="StartPageScreen" component={StartPageScreen}/>
          ) : (
            <>
            <Stack.Screen name="LogInScreen" component={LogInScreen}/>
            <Stack.Screen name="Registration" component={Registration}/>
            
            </>
          )

          }     
          
          
        </Stack.Navigator>
        
    )
}

export default StackNavigator