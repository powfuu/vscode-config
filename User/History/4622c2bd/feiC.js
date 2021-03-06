import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text,View,Dimensions} from 'react-native'
export const MainView = styled(SafeAreaView)` 
height: 100%;
background:white;
`
export const Inwork = styled(Text)` 
color:#23ff3e;
`
export const Debug = styled(Text)`
color:red;
font-size:18px;
`
export const MainViewBottomNav = styled(SafeAreaView)` 
position:absolute;
bottom:0;
height:7.75%;
padding-left:25px;
background:#ffffff;
width:100%;
flex-direction: row;
text-align: center;
align-items: center;
justify-content: center;
border-top-width: 1px;
border-color: rgb(230,230,230);
`