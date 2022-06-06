import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decisions/decisions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const StackNavigatorApp = createNativeStackNavigator();

export default function Stack(){
    return(
        <StackNavigatorApp.Navigator initialRouteName='Dashboard' screenOptions={
            {headerShown: false}}>
            <StackNavigatorApp.Screen name='Dashboard' component={Dashboard} />
            <StackNavigatorApp.Screen name='Decision' component={Decision}/>
        </StackNavigatorApp.Navigator>
    )
}