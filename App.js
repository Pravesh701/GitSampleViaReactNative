import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.textStyle}> Hello git. How are you ? </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})
