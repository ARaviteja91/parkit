import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import Welcome from '../assets/splash-icon.png'

const index = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(null); // null = loading
  const dev_mode = process.env.EXPO_PUBLIC_DEV_MODE

  useEffect(() => {
     
    const checkFirstVisit = async () => {
      try {
        const value = await AsyncStorage.getItem('hasVisited');
        if (value === null) {
          // First-time visitor
          await AsyncStorage.setItem('hasVisited', 'true');
          setIsFirstVisit(true);
          router.replace('(auth)/welcome')
        } else {
          // Returning visitor
          setIsFirstVisit(false);
          setTimeout(() => {
            
            router.replace('/login')
          }, 2000);
        }
      } catch (error) {
        console.error('Error checking visit status', error);
      }
    };

    checkFirstVisit();
  }, []);

  if (isFirstVisit === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <Image style={styles.welcome} source={Welcome} />
      <View style={styles.resetBtn} >
        <Button color={'orangered'} title='Reset' onPress={()=>AsyncStorage.removeItem('hasVisited')} />
      </View>      
    </>
  );
};

export default index;
const styles = StyleSheet.create({
  resetBtn:{
    position:'absolute',
    top:50,
    color:'white',
    width:'auto'
  },
  welcome:{
  }
})