import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export default class PopularItem extends React.Component {

  render() {
    const { item } = this.props
    if (!item || !item.owner) return null
    let favoriteButton = <TouchableOpacity onPress={() => {

    }} style={{padding: 6}} underlayColor={'transparent'} >
      <FontAwesome size={26} style={{color: 'red'}} name={'star-o'} />
    </TouchableOpacity>
    return (<TouchableOpacity onPress={this.props.onSelect}>
      <View style={styles.cell_container}>
        <Text style={styles.title}>
          {item.fullname}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.row}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text>Author:</Text>
            <Image style={{ height: 22, width: 22 }} source={{ uri: item.owner.avatar_url }} />
          </View>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text>Star:</Text>
            <Text>{item.stargazers_count}</Text>
          </View>
          {favoriteButton}
        </View>
      </View>
    </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  cell_container: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#dddddd',
    borderWidth: 0.5,
    borderRadius: 5,
    shadowColor: 'gray', 
    shadowOffset: {width: 0.5, height: 0.3},  // 只对ios有用
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2 // 安卓阴影
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: '#212121'
    
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    color: '#757575',
  }
})