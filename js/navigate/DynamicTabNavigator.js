import React from "react";
import {connect} from 'react-redux'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import PopularPage from '../page/PopularPage'
import FavoritePage from '../page/FavoritePage'
import MyPage from '../page/MyPage'
import TrendingPage from '../page/TrendingPage'
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import {BottomTabBar} from 'react-navigation-tabs'

const Tabs = { // 配置路由
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon: ({ tintColor, focused }) =>
        (<MaterialIconsIcons
          name={'whatshot'}
          size={26}
          style={{ color: tintColor }}
        />)
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: "趋势1",
      tabBarIcon: ({ tintColor, focused }) =>
        (<Ionicons
          name={'md-trending-up'}
          size={26}
          style={{ color: tintColor }}
        />)
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: "收藏",
      tabBarIcon: ({ tintColor, focused }) =>
        (<MaterialIconsIcons
          name={'favorite'}
          size={26}
          style={{ color: tintColor }}
        />)
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) =>
        (<Entypo
          name={'user'}
          size={26}
          style={{ color: tintColor }}
        />)
    }
  },

}

 class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = Tabs
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}
    return createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme } {...props} />
      },
    })
  }
  render() {
    // 防止tab重复创建
    let Tab
    if(this.Tabs) {
      Tab = this.Tabs
    }else{
      Tab =  this.Tabs = createAppContainer(this._tabNavigator())
    }


    return <Tab />
  }
}

class TabBarComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
})

export default connect(mapStateToProps)(DynamicTabNavigator)