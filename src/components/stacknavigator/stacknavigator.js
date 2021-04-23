import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import LogInScreen from "../../screens/login/LogInScreen"
import Registration from "../../screens/registration/RegistrationScreen"
import StartPageScreen from "../../screens/startpage/StartPageScreen"



const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>   
              
          <Stack.Screen name="LogInScreen" component={LogInScreen}/>
          <Stack.Screen name="Registration" component={Registration}/>  
          <Stack.Screen name="StartPageScreen" component={StartPageScreen}/>
          
        </Stack.Navigator>
        
    )
}

export default StackNavigator