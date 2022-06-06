import React, { useEffect,useState } from 'react';
import * as e from './bottomnavComponents'
import { MainViewBottomNav } from '../../defaultStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeModules } from 'react-native'

export default function BottomNav({navigation}){
    const [httpToken,setHttpToken]=useState("")
    const [inactiveIco, setInactiveIco]=useState("#777")
    const [activeIco, setActiveIco]=useState("#23ff3e")

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
            <e.NavIcon name="dashboard" size={31} color={activeIco} />
            <e.NavIcon name="chat" size={28} color={inactiveIco} />
            <e.NavIcon name="explore" size={30} color={inactiveIco} />
            <e.NavIcon name="notifications" size={30} color={inactiveIco} />
            <e.NavIcon name="menu" size={33} color={inactiveIco} />
        </MainViewBottomNav>
    )
    }else if(httpToken != 'NON_EXPIRED_TOKEN'){
        return(
            <></>
        )
    }
}