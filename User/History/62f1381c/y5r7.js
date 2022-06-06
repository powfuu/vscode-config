import { React } from 'react';
import { Alert,Text,Button } from 'react-native'
import * as e from './signupComponents'
import { MainView } from '../../defaultStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Signup({navigation}){
    const getToken = async()=>{
    const token = AsyncStorage.getItem('@app:token')
    Alert.alert('Token is:',token)
    }
return(
    <MainView>
        <Button onPress={getToken}>TOken</Button>
    <Text>Signup</Text>
    </MainView>
);
}
