// components/SplashScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Splash screen component with gradient circles
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Outer gradient circle */}
      <LinearGradient
        colors={['orange', 'orangered']}
        style={styles.circleOuter}
      />

      {/* Inner gradient circle */}
      <LinearGradient
        colors={['orangered', 'orange']}
        style={styles.circleInner}
      />

      {/* Splash Text */}
      <Text style={styles.text}>Welcome to MyApp!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    top: '20%',
    left: '15%',
  },
  circleInner: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    bottom: '20%',
    right: '15%',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'orangered',
  },
});
