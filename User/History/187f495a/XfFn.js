import Dashboard from './resources/dashboard/dashboard'
import Decision from './resources/decisions/decisions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const StackNavigatorApp = createNativeStackNavigator();

export default function Stack(){
    return(
        <StackNavigatorApp.Navigator initialRouteName='Dashboard' screenOptions={
            {cardStyle:{
                backgroundColor:'#121121',
                opacity:1
            }},
            {headerShown: false}}>
            <StackNavigatorApp.Screen name='Dashboard' component={Dashboard} />
            <StackNavigatorApp.Screen name='Decision' component={Decision}/>
        </StackNavigatorApp.Navigator>
    )
}

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