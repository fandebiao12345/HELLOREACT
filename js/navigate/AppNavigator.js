import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetailPage from '../page/DetailPage'
import FetchDemo from '../page/FetchDemo'
import { connect } from 'react-redux'
import { 
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
export const rootCom = 'Main'
const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})

const mainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
  },
  FetchDemo: {
    screen: FetchDemo,
  }
})
export const RootNavigator = createSwitchNavigator({
  // Init: InitNavigator,
  Main: mainNavigator
}, {
    navigationOptions: {
      header: null
    }
  })

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
)

const AppWithNavigationState = createReduxContainer(createAppContainer(RootNavigator))

const mapStateToProps = (state) => ({
  state: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState)
