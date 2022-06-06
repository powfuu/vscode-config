import React from 'react';
import StackNavigator from './stackNav'
import Dashboard from "./src/dashboard/dashboard";
import SignupPersonal from './src/signup/signup-personal'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { NavigationContainer, createMaterialBottomTabNavigator } from 'react-navigation'
import  MaterialCommunityIcons  from 'react-native-vector-icons';
export default function App(){
return(
    <>
    <StackNavigator/>
    </>
)
}
