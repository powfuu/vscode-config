import React from 'react';
import * as e from './menuComponents'
import { MainView } from '../../defaultStyles';
export default function Menu({ navigation }){
 const rmToken = async()=>{
        await AsyncStorage.clear() ? navigation.navigate('Signin') : null;
    } 
    return(
        <MainView>
        <e.Signout onPress={rmToken}>
            <e.SignoutText>Log Out</e.SignoutText>
        </e.Signout>
        </MainView>
    )
}