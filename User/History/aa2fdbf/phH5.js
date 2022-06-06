import React from 'react';
import StackNavigator from './stackNav'
import { View, Text } from 'react-native'
export default function App(){
return(
<StackNavigator>
    <View style={{position: 'absolute',height: '100%',backgroundColor: '#000000'}}></View>
    </StackNavigator>
)
}
