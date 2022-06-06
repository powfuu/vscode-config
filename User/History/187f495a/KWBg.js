import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decisions/decisions'
const stack = createStackNavigator({
    Dashboard:Dashboard,
    Decision:Decision
},
{
    initialRouteName:'Dashboard',
    defaultNavigationOptions:{
        headerShown:false,
    cardStyle: { 
        backgroundColor:'#121121',
        flex:1
    },
    }
}
);
export default createAppContainer(stack)