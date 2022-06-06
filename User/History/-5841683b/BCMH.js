import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Explore from '../src/explore/explore'
import Account from '../src/account/account';

const StackNavigatorApp = createNativeStackNavigator();

export default function Stack(){
    return(
        <StackNavigatorApp.Navigator initialRouteName='ExploreApp' screenOptions={{headerShown: false}}>
            <StackNavigatorApp.Screen name='ExploreApp' component={Chat} />
            <StackNavigatorApp.Screen name='Account' component={Account}/>
        </StackNavigatorApp.Navigator>
    )
}