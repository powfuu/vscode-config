import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import Signin from './src/signin/signin'
import Signup from './src/signup/signup'
import SignupPersonal from './src/signup/signup-personal'
import SignupBusiness from './src/signup/signup-business'
const stack = createStackNavigator({
  Signin: Signin,
  Signup: Signup,
  SignupBusiness: SignupBusiness,
  SignupPersonal: SignupPersonal,
},
{
initialRouteName: 'Signin',
defaultNavigationOptions: {
headerShown: false,
},
}
);
export default createAppContainer(stack);