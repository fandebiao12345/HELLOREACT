import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { connect } from 'react-redux'
import actions from '../action'


class MyPage extends React.Component {
  
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
        <Button title="改变主题色"
        onPress={() => {
          this.props.onThemeChange('blue')
        }}
        ></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize:  60,
    textAlign: 'center',
    margin: 10,
    color:　'red'
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

export default connect(mapStateToProps, mapDispathToProps)(MyPage)