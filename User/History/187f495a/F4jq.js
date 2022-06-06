import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decisions/decisions'
const stack = createStackNavigator({
    Decision:Decision,
    Dashboard:Dashboard,
},
{
    initialRouteName:'Dashboard',
    defaultNavigationOptions:{
        headerShown:false,
    cardStyle: { 
        backgroundColor:'#121121',
        opacity:1
    },
    }
}
);
export default createAppContainer(stack)