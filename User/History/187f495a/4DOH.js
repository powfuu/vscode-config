import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decision/decision'
const stack = createStackNavigator({
    Dashboard:Dashboard,
    Decision:Decision
},
{
    initialRouteName:'Dashboard',
    defaultNavigationOptions:{
        headerShown:false,
    }
}
);
export default createAppContainer(stack)