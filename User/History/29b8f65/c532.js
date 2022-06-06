import { React, useState} from 'react'; import { Alert } from 'react-native'
import * as e from './signupComponents'
import { MainView,Inwork } from '../../defaultStyles';
import Object from '../../resources/business-object.png'
import axios from 'axios'
import { HOST } from '@env'
export default function Signup({navigation}){
    //inputs
    const [IbusinessName, setIbusinessName] = useState('rgb(230,230,230)')
    const [Iemail, setIemail] = useState('rgb(230,230,230)')
    const [Ipassword,setIpassword] = useState('rgb(230,230,230)')
    const [IconfirmPassword, setIconfirmPassword] = useState('rgb(230,230,230)')
    //inputs value
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signup = () =>{
        axios.post(`${HOST}/api/signup-business`,{
            name:businessName,
            email:email,
            password:password
        }).then((req)=>{
            req.data.success_signup ? navigation.navigate('Signin') : Alert.alert('Error while business registration','Email is already used in our platform.')
        })
    }

return(
    <MainView>
        <e.FormGeneral>
            <e.FormObject source={Object}/>
            <e.FormTitle>Register your Business in <Inwork>inWork</Inwork></e.FormTitle>
            <e.Form>
                <e.FormInput placeholder="Business Name"
                placeholderTextColor="rgb(180,180,180)" onChangeText={(props)=>{
                        setBusinessName(props)
                    }} bg={IbusinessName} onBlur={()=>{
                        setIbusinessName('rgb(230,230,230)')
                    }} onFocus={()=>{
                        setIbusinessName('#23ff3e')
                    }}
                />
             <e.FormInput placeholder="Email"
                placeholderTextColor="rgb(180,180,180)" onChangeText={(props)=>{
                        setEmail(props)
                    }} bg={Iemail} onBlur={()=>{
                        setIemail('rgb(230,230,230)')
                    }} onFocus={()=>{
                        setIemail('#23ff3e')
                    }}
                />
                 <e.FormInput placeholder="Password" secureTextEntry={true}
                placeholderTextColor="rgb(180,180,180)" onChangeText={(props)=>{
                        setPassword(props)
                    }} bg={Ipassword} onBlur={()=>{
                        setIpassword('rgb(230,230,230)')
                    }} onFocus={()=>{
                        setIpassword('#23ff3e')
                    }}
                />
                 <e.FormInput placeholder="Confirm Password" secureTextEntry={true}
                placeholderTextColor="rgb(180,180,180)" onChangeText={(props)=>{
                        setConfirmPassword(props)
                    }} bg={IconfirmPassword} onBlur={()=>{
                        setIconfirmPassword('rgb(230,230,230)')
                    }} onFocus={()=>{
                        setIconfirmPassword('#23ff3e')
                    }}
                />
             <e.FormSubmit onPress={signup}>
                <e.FormSubmitText>Register Business</e.FormSubmitText>
            </e.FormSubmit>
            </e.Form>
            </e.FormGeneral>
            <e.Footer>
                <e.FooterItem>Terms & Conditions</e.FooterItem>
                <e.FooterItem>Official Website</e.FooterItem>
            </e.Footer>
    </MainView>
);
}


