import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { connect } from 'react-redux'
import actions from '../action'

class TrendingPage extends React.Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>TrendingPage</Text>
        <Button
          title="改变颜色"
          onPress={() => {
            this.props.onThemeChange('#096')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'blue'
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispathToProps = dispatch => {
  return {
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(TrendingPage)