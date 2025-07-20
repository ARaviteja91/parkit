import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>home</Text>
  
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})