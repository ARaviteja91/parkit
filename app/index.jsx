import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/parkit_car.png'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.title}>PARK<Image source={Logo} style={styles.logo} />IT </Text>
        <Link style={styles.button} href={'/login'} >Login</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:52,
        color:'#fa6f1d'
    },
    logo:{
        width:60,
        height:60,
        transform:[{translateY:10}]
    },
    button:{
        color:'#fff',
        backgroundColor:'orange',
        padding:10,
        margin:10,
        borderRadius:10,
        fontSize:18,
        width:'70%',
        textAlign:'center'
    }

})
export default index
