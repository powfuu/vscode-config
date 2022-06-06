import React from 'react';
import StackNavigator from './stackNav'
import Dashboard from "./src/dashboard/dashboard";
import SignupPersonal from './src/signup/signup-personal'
import { createBottomTabNavigator } from 'react-navigation-tabs'
export default function App(){
return(
    <>
    <StackNavigator/>
    </>
)
}
