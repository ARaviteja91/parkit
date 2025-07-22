import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function Welcome() {
  const continueToApp = async () => {
    await AsyncStorage.setItem('hasSeenWelcome', 'true');
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Our App 🎉</Text>
      <Text style={styles.text}>Thank you for joining us!</Text>
      <Button title="Continue" onPress={continueToApp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 20 },
});
