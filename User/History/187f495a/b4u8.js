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
        colors: {
            background: 'transparent',
          },
    cardStyle: { 
        backgroundColor:'#121121',
    },
    }
}
);
export default createAppContainer(stack)