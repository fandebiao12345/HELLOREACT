import React from 'react'
import {View, Text} from 'react-native'


export default class DetailsScreen extends React.Component {
  componentDidMount() {
    debugger
    console.log(this.props)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen111</Text>
      </View>
    );
  }
}