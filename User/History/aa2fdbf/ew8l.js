import React from 'react';
import StackNavigator from './stackNav'
import { createBottomTabNavigator } from 'react-navigation-tabs'
export default function App(){
    const Tab = createBottomTabNavigator()
return(
    <>
    <StackNavigator/>
    </>
)
}
