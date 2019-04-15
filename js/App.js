 import React from 'react'
 import {Provider} from 'react-redux'
 import AppNavigator from './navigate/AppNavigator'
 import store from './store'

 export default class App extends React.Component{
  render() {
    return <Provider store={store}>
      <AppNavigator/>
    </Provider>
  }
 }