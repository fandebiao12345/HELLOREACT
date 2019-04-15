import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import NavigationUtil from '../navigate/NavigationUtil'



export default class WelcomePage extends React.Component {
  componentDidMount() {
    // this.timer = setTimeout(() => {
    //   NavigationUtil.resetToHomePage({
    //     navigation: this.props.navigation
    //   })
    // }, 500)
  }
  componentWillUnmount() {
    this.timer&&clearTimeout(this.timer)
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WelcomePage</Text>
        <Button
        title="fetch"
        onPress={() => {
          console.log(this.props.navigation)
          NavigationUtil.goPage({
            navigation: this.props.navigation,
            page: 'FetchDemo'
          })
        }}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize:  20,
    textAlign: 'center',
    margin: 10,
  }
})