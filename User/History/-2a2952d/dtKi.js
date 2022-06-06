/* import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import BottomNav from './src/bottomnav/bottomnav'
import Signin from './src/signin/signin'
import Signup from './src/signup/signup'
import SignupPersonal from './src/signup/signup-personal'
import SignupBusiness from './src/signup/signup-business'

const stack = createStackNavigator({
  Signin: Signin,
  Signup: Signup,
  Dashboard: Dashboard,
  SignupBusiness: SignupBusiness,
  SignupPersonal: SignupPersonal,
  Chat:Chat,
  Explore:Explore,
  Notifications:Notifications,
  Menu:Menu,
},
{
initialRouteName: 'Signin',
defaultNavigationOptions: {
headerShown: false,
},
}
);
export default createAppContainer(stack);
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Chat from './src/chat/chat'
import Explore from './src/explore/explore'
import Notifications from './src/notifications/notifications'
import Menu from './src/menu/menu'
import Dashboard from "./src/dashboard/dashboard";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function AppNavigator(){
    return( 
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#999'
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="dashboard" color={color} size={size}/>),
            }} name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Chat" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="chat" color={color} size={size}/>)
            }} component={Chat}/>
            <Tab.Screen name="Explore" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="explore" color={color} size={size}/>)
            }} component={Explore}/>
            <Tab.Screen name="Notifications" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="notifications" color={color} size={size}/>)
            }} component={Notifications}/>
            <Tab.Screen name="Menu" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="menu" color={color} size={size}/>)
            }} component={Menu}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}