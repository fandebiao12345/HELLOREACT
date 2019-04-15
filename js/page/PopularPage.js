import React from "react";
import { StyleSheet, View, ActivityIndicator, FlatList, RefreshControl, Text } from "react-native";
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import Toast from 'react-native-easy-toast'
import NavigationUtil from '../navigate/NavigationUtil'
import { connect } from 'react-redux'
import actions from '../action/index'
import PopularItem from '../common/PopularItem'
// import console = require("console");



const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=stars'
const THEME_COLOR = 'red'
const PAGE_SIZE = 10
export default class PopularPage extends React.Component {
  constructor(props) {
    super(props)
    this.tabNames = ['java']

  }
  genTabs() {
    const tabs = {}
    this.tabNames.forEach((item, index) => {

      tabs[`tabs${index}`] = {
        screen: props => <PopularTabPage {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    })
    return tabs
  }
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator(this.genTabs(), {
      tabBarOptions: {
        tabStyle: styles.tabStyle,
        upperCaseLabel: false, // 是否大写
        scrollEnabled: true, // 是否可滚动
        style: {
          backgroundColor: '#678' // 背景色
        },
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle
      }
    }))
    return <TabNavigator />
  }
}


class PopularTab extends React.Component {
  constructor(props) {

    super(props)
    const { tabLabel } = this.props
    this.storeName = tabLabel

  }
  componentDidMount() {

    this.loadData()
  }
  loadData(loadMore) {

    const { onLoadPopularData, onLoadMorePopular } = this.props
    const store = this._store()
    const url = this.genFetchUrl(this.storeName)
    if (loadMore) {

      onLoadMorePopular(this.storeName, ++store.pageIndex, PAGE_SIZE, store.items, () => {
        this.refs.toast.show('没有更多了')
      })
    } else {

      onLoadPopularData(this.storeName, url, PAGE_SIZE)
    }

  }
  _store() {
    const { popular } = this.props
    let store = popular[this.storeName]
    if (!store) {
      store = {
        items: [],
        isLoading: false,
        projectModes: [],
        hideLoadingMore: true,
        pageIndex: 1
      }
    }
    return store
  }
  genFetchUrl(key) {
    return URL + key + QUERY_STR
  }
  renderItem(data) {
    const item = data.item
    return <PopularItem item={item}
      onSelect={() => {

      }}
    />
  }
  getIndicator() {
  
    let getIndicator = this._store().hideLoadingMore ? null : <View style={styles.indicatorStyle}>
      <ActivityIndicator style={styles.indicator} />
      <Text>正在加载更多</Text>
    </View>
    console.log(getIndicator)
    return getIndicator
  }
  render() {


    let store = this._store()

    return (
      <View style={styles.container}>
        <FlatList
          data={store.projectModes}
          renderItem={data => this.renderItem(data)}
          keyExtractor={item => "" + item.id}
          ListFooterComponent={() => this.getIndicator()}
          onEndReached={() => {

            if(this.canLoadMore){
              this.loadData(true)
              this.canLoadMore = false
            }
            
          }}
          onMomentumScrollBegin={() => {

            this.canLoadMore = true
          }}
          ListEmptyComponent={<Text>空</Text>}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              title={'loading'}
              colors={[THEME_COLOR]}
              refreshing={store.isLoading}

              onRefresh={() => {
                this.loadData()

              }}
              titleColor={THEME_COLOR}
              tintColor={THEME_COLOR}

            />
          }
        />
        <Toast ref={'toast'} position={'center'} />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  popular: state.popular
})
const mapDispatchToProps = dispatch => ({
  onLoadPopularData: (storeName, url) => dispatch(actions.onLoadPopularData(storeName, url, PAGE_SIZE)),
  onLoadMorePopular: (storeName, pageIndex, PAGE_SIZE, items, callback) => dispatch(actions.onLoadMorePopular(storeName, pageIndex, PAGE_SIZE, items, callback))
})

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle: {
    height: 2,
    backgroundColor: 'white'
  },
  labelStyle: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  },
  indicatorStyle: {
    alignItems: 'center'
  },
  indicator: {
    color: 'red',
    margin: 10
  }
})