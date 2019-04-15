import React from "react";
import {BackHandler} from 'react-native'
import DynamicTabNavigator from '../navigate/DynamicTabNavigator'
import NavigationUtil from "../navigate/NavigationUtil";
import {NavigationActions} from 'react-navigation'


export default class HomePage extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onBackPress = () => {
    console.log(this.props.navigation)
    const {dispatch, nav} = this.props

    if(nav.routes[0].index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }
  render() {
    NavigationUtil.navigation = this.props.navigation
    return <DynamicTabNavigator />
  }
}