import {createAppContainer} from 'react-navigation'
import AppNavigator from './navagate/navigate'
import React from 'react'
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}