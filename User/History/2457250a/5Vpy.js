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
margin-top:1.2%;
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
margin-top:5%;
`
export const AccountTagsTitleView = styled(View)`
width: 100%;
flex-direction: row;
padding-left:10%;
`
export const AccountTagsTitle = styled(Text)`
color:rgb(100,100,100);
font-weight: 500;
font-size:14.75px;
`
export const AccountTagsIc = styled(MaterialIcons)`
margin-top:-2px;
margin-left:2%;
margin-right:1.8%;
`
export const AccountTagsNumber = styled(Text)`
color: rgb(100,100,100);
font-size:13.4px;
`
export const TagsBody = styled(View)`

`
export const NoTagsBody = styled(View)`

`
export const NoText = styled(Text)`

`
export const NoSvg = styled(Image)`

`