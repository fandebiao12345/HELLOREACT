// In App.js in a new project


import { createStackNavigator } from "react-navigation";
import HomeScreen from '../page/HomeScreen'
import DetailsScreen from '../page/DetailsScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: DetailsScreen
}, {
    initialRouteName: "Home"
  });

export default AppNavigator