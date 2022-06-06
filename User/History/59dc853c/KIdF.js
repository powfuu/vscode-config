import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons';
import { View,Text,Image,ScrollView } from 'react-native'

export const ScrollViewScene = styled(ScrollView)`
`
export const PreferencesPopup = styled(View)`
border-width: 1px;
border-color:#fff;
background-color: #fff;
width: 300px;
text-align: center;
align-items: center;
flex-direction: column;
align-self: center;
border-radius: 7px;
margin-top:5%;
padding:8px;
padding-top:8px;
padding-bottom:10px;
`
export const SearchIc = styled(MaterialIcons)`
`
export const PreferencesPopupTitle = styled(Text)`
margin-top: 2.25%;
margin-bottom:2%;
font-weight: bold;
font-size: 17px;
`
export const PreferencesPopupDescriptionView = styled(View)`
flex-direction: column;
align-items: center;
`
export const PreferencesPopupPreferencesView = styled(View)`
flex-direction: column;
align-items: center;
margin-top:.9%;
`
export const PreferencesPopupDescription = styled(Text)`
color:rgb(120,120,120);
`
export const PreferencesPopupPreferencesPopup = styled(View)`
`
export const PreferencesPopupPreferences = styled(Text)`
color: rgb(80,80,80);
margin-top:1.75%;
`
export const AccountsContent = styled(View)`
margin-top:8%;
width: 100%;
align-items: center;
padding-bottom:8%;
`
export const AccountCard = styled(View)`
background:white;
width:80%;
border-radius:8px;
margin-bottom:6%;
padding-bottom:5%;
`
export const AccountCardBanner = styled(Image)`
height: 80px;
width:100%;
border-radius:6px;
`
export const AccountCardPic = styled(Image)`
height:50px;
width:50px;
border-radius:100px;
margin-top:-25px;
margin-left:5%;
`
export const AccountCardName = styled(Text)`
margin-left:5%;
margin-top:2%;
color:black;
font-size:13px;
`
export const AccountCardProfession = styled(Text)`
margin-left:5%;
position:absolute;
top:58%;
right:0%;
`
export const AccountCardLocation = styled(Text)`
margin-left:5%;
color:#666;
font-size:12px;
margin-top:1%;
`
export const LocationIc = styled(MaterialIcons)`
margin-left:3.5%;
margin-top:2%;
`
export const LocationView= styled(View)`
flex-direction: row;
`