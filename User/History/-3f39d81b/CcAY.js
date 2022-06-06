import { createStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../src/dashboard/dashboard';
import Account from '../src/account/account';

const stackNavigator = createStackNavigator();

export default const Stack = () => {
    return(
        <stackNavigator.Navigator initialRouteName='Dashboard'>
            <stackNavigator.Screen name='Dashboard' component={Dashboard}/>
            <stackNavigator.Screen name='Account' component={Account}/>
        </stackNavigator.Navigator>
    )
}