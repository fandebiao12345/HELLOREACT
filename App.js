import {createAppContainer} from 'react-navigation'
import AppNavigator from './navagate/navigate'
import React from 'react'
import {Provider} from 'react-redux'
import store from './js/store'
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Provider >
      
    </Provider>;
  }
}