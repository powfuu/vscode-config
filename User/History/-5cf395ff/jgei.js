import React from 'react'
import Navigation from './stack'
import { StatusBar } from 'expo-status-bar';
export default function App() {
return(
    <>
    <Navigation style={{flex:1}} transitionStyle={{backgroundColor: "#121121"}}/>
    </>
)
}

