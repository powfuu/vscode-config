import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Chat from './src/chat/chat'
import Explore from './src/explore/explore'
import Notifications from './src/notifications/notifications'
import Menu from './src/menu/menu'
import Dashboard from "./src/dashboard/dashboard";
import Account from "./src/account/account"
import MyAccount from "./src/account/myAccount"
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function AppNavigator(){
    return( 
        <Tab.Navigator initialRouteName='Dashboard' 
         screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#999',
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="dashboard" color={color} size={size}/>),
            }} name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Chat" options={{
                tabBarBadge:6,
                tabBarIcon: ({color, size}) => (<MaterialIcons name="chat" color={color} size={size}/>)
            }} component={Chat}/>
            <Tab.Screen name="Explore" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="explore" color={color} size={size}/>)
            }} component={Explore}/>
            <Tab.Screen name="Notifications" options={{
                tabBarBadge: 3,
                tabBarIcon: ({color, size}) => (<MaterialIcons name="notifications" color={color} size={size}/>)
            }} component={Notifications}/>
            <Tab.Screen name="Menu" options={{
                tabBarIcon: ({color, size}) => (<MaterialIcons name="menu" color={color} size={size}/>)
            }} component={Menu}/>
            <Tab.Screen name="Account" component={Account} options={{tabBarVisible: false}}/>
             <Tab.Screen name="myAccount" component={MyAccount}/>
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