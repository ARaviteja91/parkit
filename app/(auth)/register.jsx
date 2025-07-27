import React, { useState } from 'react';
import { View, TextInput, Button, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { router } from 'expo-router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(res.user);
      alert('Verification email sent. Please check your inbox.');
      router.replace('/(auth)/login');
    } catch (e) {
      setError(e.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
      <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} onChangeText={setConfirmPassword} />
      {loading ? <ActivityIndicator /> : <Button title="Register" onPress={register} />}
      <Text style={styles.error}>{error}</Text>
      <Pressable onPress={() => router.replace('/(auth)/login')}><Text style={styles.link}>Go to Login</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginVertical: 5 },
  link: { color: 'blue', marginVertical: 5 },
});

