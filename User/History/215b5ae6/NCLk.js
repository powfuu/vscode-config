import styled from 'styled-components'
import { TextInput,View,Text,Image,TouchableHighlight } from 'react-native'

//Selection Signup
export const Footer = styled(View)`
position:absolute;
flex-direction: row;
flex-wrap: wrap;
bottom:0;
align-self: center;
margin-bottom:4%;
`
export const FooterItem = styled(Text)`
color:rgb(150,150,150);
padding-left:5%;
text-decoration: underline;
margin-bottom:5%;
font-size:12px;
`
export const ChoiceType = styled(View)`
align-items: center;
justify-content: center;
flex:1;
`
export const TitleSignup = styled(Text)`
color:black;
font-size: 27px;
align-self: center;
font-weight: bold;
margin-right:12%;
margin-left:4%;
margin-top:-7%;
`
export const SelectBox = styled(View)`
margin-top:12%;
`
export const Box = styled(View)`
width: 80%;
border-width: 1px;
border-radius: 15px;
border-color: rgb(230,230,230);
align-items: center;
padding-top:21px; padding-bottom: 18px;
padding-left:33px; padding-right: 33px;
margin-bottom:3%;
`
export const BoxTitle = styled(Text)`
color:black;
font-size:15px;
font-weight: bold;
`
export const BoxDescription = styled(Text)`
text-align: center;
color:rgb(165,165,165);
margin-top:1.9%;
`
export const BoxObject = styled(Image)`
height: 130px;
width: 155px;
margin-top: 3%;
`
export const FormGeneral = styled(View)`
align-items: center;
height: 100%;
padding-top: 20%;
`
export const FormObject = styled(Image)`
width:70%;
height: 23%;
margin-top:5%;
`
export const FormTitle = styled(Text)`
width: 55%;
text-align: center;
font-size:20px;
margin-top:5%;
line-height: 28px;
`
export const Form = styled(View)`
margin-top:9%;
height: 100%;
width: 100%;
align-items: center;
`
export const FormInput = styled(TextInput)`
border-width:1px;
border-radius: 80px;
border-color: ${props => props.bg};
padding-left: 22px;
padding-right:20px;
width: 65%;
height: 5%;
margin-bottom: 3.5%;
color:#20E15D;
`
export const FormSubmit = styled(TouchableHighlight)`
background-color: #24252A;
margin-top:35px;
padding-left:18px; padding-right:18px;
padding-top:9px; padding-bottom: 9px;
border-radius:100px;
align-self: flex-end;
margin-right:8%;
`
export const FormSubmitText = styled(Text)`
color:white;
`