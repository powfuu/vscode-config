import { createStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../src/dashboard/dashboard';
import Account from '../src/account/account';

const StackNavigatorApp = createStackNavigator();

export default function Stack(){
    return(
        <StackNavigatorApp.Navigator initialRouteName='Dashboard'>
            <StackNavigatorApp.Screen name='Dashboard' component={Dashboard}/>
            <StackNavigatorApp.Screen name='Account' component={Account}/>
        </StackNavigatorApp.Navigator>
    )
}