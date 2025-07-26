import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const index = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(null); // null = loading

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
          // router.replace('(auth)/login')
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
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 18 }}>
        {isFirstVisit ? '👋 Welcome, first-time visitor!' : '👋 Welcome back!'}
      </Text>
      <Button title='Reset' onPress={()=>AsyncStorage.removeItem('hasVisited')} />
    </View>
  );
};

export default index;
