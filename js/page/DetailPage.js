import React from "react";
import { StyleSheet, View, Text } from "react-native";



export default class DetailPage extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WelcomePage</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  welcome: {
    fontSize:  20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'blue'
  }
})