import React from 'react';
import StackNavigator from './stackNav'
import BottomNavigation from './src/bottomnav/bottomnav'
import {Text} from 'react-native'
export default function App({navigation}){
return(
    <>
    <StackNavigator/>
    <BottomNavigation navigation={navigation}/>
    </>
)
}
