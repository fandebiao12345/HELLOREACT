// In App.js in a new project


import { createStackNavigator } from "react-navigation";
import HomeScreen from '../page/HomeScreen'
import DetailsScreen from '../page/DetailsScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default AppNavigator