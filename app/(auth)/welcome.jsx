import React, { useEffect, useState } from 'react';
import { View,StyleSheet, Image, Pressable, Text, Button } from 'react-native';

import OnBoarding from '../../components/OnBoarding';
import { Link } from 'expo-router';


export default function Welcome() {
  const [firstScreen, setfirstScreen] = useState(true)
  const [onboarding, setOnboarding] = useState(null)
  useEffect(() => {
     setTimeout(() => {
      setfirstScreen(false)
     }, 1500);
  }, [])

  const bookParking=()=>{
    setOnboarding(true)
    setfirstScreen(null)
  }
  const rentParking=()=>{}
  
  
  return (
    <>
      <OnBoarding/>      
    </>
  );
}

const styles = StyleSheet.create({
  wlImg:{position:'absolute',zIndex:99},
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  btn:{
    margin:5,
    borderWidth:1,
    padding:5,
    backgroundColor:'orangered',
  },
  btn_disabled:{
    margin:5,
    borderWidth:1,
    padding:5,
    backgroundColor:'lightgrey',
  },
  btnText:{
    fontSize:20,
    color:'#fff'
  }
});
