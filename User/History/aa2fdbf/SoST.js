import React from 'react';
import StackNavigator from './stackNav'
import Dashboard from "./src/dashboard/dashboard";
import SignupPersonal from './src/signup/signup-personal'
import { createBottomTabNavigator } from 'react-navigation-tabs'
const Tab = createBottomTabNavigator();
export default function App(){
return(
    <>
    <StackNavigator/>
    <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="SignupPersonal" component={SignupPersonal} />
    </Tab.Navigator>
    </>
)
}
