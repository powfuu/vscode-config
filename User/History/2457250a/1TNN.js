import styled from 'styled-components'
import { TouchableHighlight,Text,View,Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const AppScrollView = styled(ScrollView)`
`
export const AccountInitialSection = styled(View)`
align-items: center;
`
export const Banner = styled(Image)`
height:180px;
width:100%;
`
export const Pic = styled(Image)`
height:75px;
width: 75px;
border-radius:100px;
margin-top:-45px;
`
export const AccountName = styled(Text)`
font-size:15px;
color:rgb(100,100,100);
margin-top:1%;
`
export const AccountType = styled(Text)`
align-self: flex-end;
margin-right:10%;
margin-top: -10px;
color: #23ff33;
`
export const StarVal = styled(Text)`
font-size:12px;
color:rgb(100,100,100);
`
export const AccountProfessionView = styled(View)`
margin-top:2%;
`
export const AccountProfession = styled(Text)`
color:rgb(110,110,110);
font-size:13.5px;
`
export const AccountProfessionStar = styled(MaterialIcons)`
`
export const AccountBiography = styled(Text)`
color:rgb(100,100,100);
margin-top:2.2%;
width:91%;
text-align:center;
font-size:13.5px;
`
export const AccountTags = styled(View)`

`
export const AccountTagsTitleView = styled(View)`

`
export const AccountTagsTitle = styled(Text)`

`
export const AccountTagsIc = styled(MaterialIcons)`

`
export const AccountTagsNumber = styled(Text)`

`