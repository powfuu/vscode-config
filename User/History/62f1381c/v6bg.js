import { React } from 'react';
import { Alert,Text } from 'react-native'
import * as e from './signupComponents'
import { MainView } from '../../defaultStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Signup({navigation}){
    const getToken = async()=>{
    const token = AsyncStorage.getItem('@app:token')
    Alert.alert(token)
    }
return(
    <MainView>
    <Text>Signup {token}</Text>
    </MainView>
);
}
