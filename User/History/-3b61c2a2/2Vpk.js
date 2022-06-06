import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chat from '../src/chat/chat';
import Account from '../src/account/account';

const StackNavigatorApp = createNativeStackNavigator();

export default function Stack(){
    return(
        <StackNavigatorApp.Navigator initialRouteName='DashboardApp' screenOptions={{headerShown: false}}>
            <StackNavigatorApp.Screen name='DashboardApp' component={Chat} />
            <StackNavigatorApp.Screen name='Account' component={Account}/>
        </StackNavigatorApp.Navigator>
    )
}