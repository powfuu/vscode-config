import { React } from 'react';
import { Alert } from 'react-native'
import * as e from './signupComponents'
import { MainView,Inwork } from '../../defaultStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Signup({navigation}){

return(
    <MainView>
        <e.TitleSignup>Join to <Inwork>inWork</Inwork> and start improving your opportunities</e.TitleSignup>
            <e.Footer>
                <e.FooterItem>Terms & Conditions</e.FooterItem>
                <e.FooterItem>Forgot Password?</e.FooterItem>
                <e.FooterItem>Official Website</e.FooterItem>
            </e.Footer>
    </MainView>
);
}
