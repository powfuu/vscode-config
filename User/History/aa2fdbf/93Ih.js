import React from 'react';
import StackNavigator from './stackNav'
import { createBottomTabNavigator } from 'react-navigation-tabs'
const Tab = createBottomTabNavigator();
export default function App(){
return(
    <>
    <StackNavigator/>
    </>
)
}
