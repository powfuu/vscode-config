import React from 'react'
import Navigation from './stack'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'
export default function App() {
return(
    <>
<View style={{ 
    position: 'absolute',
    height: '100%', 
    width: '100%', 
    backgroundColor:'#121121' 
 }}/>
    <Navigation style={{flex:1}} transitionStyle={{backgroundColor: "#121121"}}/>
    </>
)
}

