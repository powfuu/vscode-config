import React from 'react';
import StackNavigator from './stackNav'
import Dashboard from "./src/dashboard/dashboard";
import SignupPersonal from './src/signup/signup-personal'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { NavigationContainer, createMaterialBottomTabNavigator } from 'react-navigation'
const Tab = createMaterialBottomTabNavigator();
export default function App(){
return(
    <>
    <StackNavigator/>
    </>
)
}
