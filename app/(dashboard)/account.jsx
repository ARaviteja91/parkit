import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const account = () => {
  return (
    <SafeAreaView style={StyleSheet.container} >
      <Text>account</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default account