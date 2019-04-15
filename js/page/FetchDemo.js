import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";



export default class FetchDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showText: ''
    }
  }
  loadData() {
    let url = 'https://api.github.com/search/repositories?q=' + this.searchKey
    fetch(url)
      .then(res => res.text())
      .then(responseText => {
        this.setState({
          showText: responseText
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>fetch</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.searchKey = text
            }}
          />

          <Button
            title="获取"
            onPress={() => {
              this.loadData()
            }} />
        </View>
        <Text>
          {this.state.showText}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 30,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})