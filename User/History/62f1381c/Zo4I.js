import { React } from 'react';
import { Text } from 'react-native'
import * as e from './signupComponents'
import { MainView } from '../../defaultStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Signup({navigation}){
    const token = AsyncStorage.getItem('@app:token')
return(
    <MainView>
    <Text>Signup {token}</Text>
    </MainView>
);
}
