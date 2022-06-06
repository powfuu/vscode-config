import styled from 'styled-components'
import { ScrollView,Text, View, TouchableWithoutFeedback, TouchableHighlight, TextInput, Dimensions } from 'react-native'
import { FontAwesome5, Ionicons, MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context'
import Modal from "react-native-modal";
export const LogoView = styled(View)`
flex-direction: row;
margin-left:4%;
margin-top:6%;
`
export const Logo = styled(FontAwesome5)`

`
export const MenuList = styled(MaterialCommunityIcons)`
position:absolute;
right:0;
margin-right:3%;
margin-top:0%;
`
export const LogoText = styled(Text)`
color:white;
font-size:16px;
margin-left:3%;
margin-top:1.75%;
`
export const MainView = styled(SafeAreaView)`
background:#121121;
height:100%;
`
export const CenteredView = styled(View)`
position:absolute;
align-items:center;
justify-content:center;
height:118%;
width:100%;
`
export const GenerateAnswer = styled(TouchableHighlight)`
position:absolute;
background:#121121;
align-items:center;
width:97.5%;
height:90.5%;
border-radius:100px;
`
export const GenerateAnswerText = styled(Text)`
color:white;
font-size:16.75px;
font-weight:bold;
margin-top:14.5px;
`
export const AddOptionInputForm = styled(View)`
margin-top:-9.5%;
margin-left:1%;
width:100%;
flex-direction: row;
`
export const AddOptionInput = styled(TextInput)`
color:white;
border-bottom-width:1px;
border-radius: 9px;
width:80%;
padding:7px;
padding-left:10px;
padding-right:15px;
border-color:rgb(248,248,248);
margin-top:4%;
`
export const AddOptionView = styled(View)`
margin-top:12.25%;
margin-left:6%;
`
export const AddOptionText = styled(Text)`
color:white;
font-size:18px;
`
export const AddOptionSvg = styled(Ionicons)`
margin-top:7.6%;
margin-left:2.4%;
transform: rotate(40deg);
`
export const AddTouchable = styled(TouchableWithoutFeedback)`
`
export const Debug = styled(Text)`
color:white;
`
export const ModalV = styled(Modal)`
justify-content: center;
align-items: center;
`
export const ModalViewBehind = styled(View)`
height:110%;
width:100%;
position:absolute;
`
export const ModalView = styled(View)`
background:#121121;
margin-top:-10%;
height:40%;
width:95%;
border-radius:8px;
position: absolute;
padding:24px;
padding-left:16px;
padding-top:30px;
`
export const ScrollModal = styled(ScrollView)`
width:100%;
`
export const OptionModal = styled(View)`
flex-direction: row;
width:100%;
margin-bottom:8.5%;
`
export const OptionOption = styled(Text)`
color:white;
margin-left:4%;
width:70%;
`
export const OptionOptionSvg = styled(MaterialIcons)`
margin-top:-.4%;
margin-left:3%;
`
export const OptionRow = styled(View)`
flex-direction: row;
`
export const OptionRemove = styled(Ionicons)`
position:absolute;
right:0;
margin-right:3%;
`
export const EmptyOptions = styled(View)`
justify-content: center;
align-items:center;
padding-top:24%;
`
export const EmptyOptionsText = styled(Text)`
color:rgb(185,185,185);
font-size:13px;
margin-top:4%;
`
export const ResultView = styled(View)`
justify-content: center;
align-items:center;
height:55%;
`
export const ResultText = styled(Text)`
color:white;
font-size:16.75px;
margin-top:14.5px;
align-self: center;
padding-left:4%;
line-height:25px;
padding-right:4%;
text-align:center;
`
export const ResultMainView = styled(TouchableHighlight)`
background:#121121;
position:absolute;
align-items:center;
width:97%;
height:91%;
border-radius:8px;
`
export const ResultListView = styled(ScrollView)`
height:30%;
`
export const ResultListMapView = styled(View)`
flex-direction: row;
align-items: center;
margin-top:4%;
`
export const ResultDecision = styled(Text)`
color:white;
font-size:14.65px;
`
export const ResultIndicator = styled(MaterialIcons)`
margin-left:5%;
margin-right:4%;
`
export const ResultViewMain = styled(View)`
width:80%;
align-self: center;
border-radius:8px;
margin-top:-20%;
padding-top:15px;
padding-bottom:25px;
padding-right:15px;
padding-left:30px;
background:#121834;
`
export const Crown = styled(MaterialCommunityIcons)`
margin-bottom:2.5%;
`