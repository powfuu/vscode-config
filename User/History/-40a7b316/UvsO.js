import React, { useEffect,useState } from 'react';
import * as e from './bottomnavComponents'
import { MainViewBottomNav } from '../../defaultStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeModules } from 'react-native'

export default function BottomNav({ navigation }){
    const [httpToken,setHttpToken]=useState("")
    const [inactiveIco, setInactiveIco]=useState("#999")
    const [activeIco, setActiveIco]=useState("#24252A")

    const getToken = async()=>{
        if(await AsyncStorage.getItem('@app:token') != null){
        setHttpToken("NON_EXPIRED_TOKEN")
        }
    }
    useEffect(()=>{
        getToken()
    },[])
    if(httpToken === "NON_EXPIRED_TOKEN"){
    return(
        <MainViewBottomNav>
            <e.NavIcon onPress={()=>{
                this.props.navigation.navigate('SignupPersonal')
            }} name="dashboard" size={25} color={activeIco} />
            <e.NavIcon onPress={()=>{
                navigation.navigate('Chat')
            }} name="chat" size={23} color={inactiveIco} />
            <e.NavIcon onPress={()=>{
                navigation.navigate('Explore')
            }} name="explore" size={25} color={inactiveIco} />
            <e.NavIcon onPress={()=>{
                navigation.navigate('Notifications')
            }} name="notifications" size={25} color={inactiveIco} />
            <e.NavIcon onPress={()=>{
                navigation.navigate('Menu')
            }} name="menu" size={29} color={inactiveIco} />
        </MainViewBottomNav>
    )
    }else if(httpToken != 'NON_EXPIRED_TOKEN'){
        return(
            <></>
        )
    }
}