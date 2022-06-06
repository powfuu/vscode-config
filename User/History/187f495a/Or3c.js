import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decisions/decisions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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