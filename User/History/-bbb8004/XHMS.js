import React from 'react';
import { Text } from 'react-native'
import * as e from './menuComponents'
export default function Menu({ navigation }){
 const rmToken = async()=>{
        await AsyncStorage.clear() ? navigation.navigate('Signin') : null;
    } 
    return(
        <Signout onPress={rmToken}>
            <e.SignoutText>Log Out</e.SignoutText>
        </Signout>
    )
}