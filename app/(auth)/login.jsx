import React, { useState } from 'react';
import { View, TextInput, Button, Text, Pressable, StyleSheet, ActivityIndicator, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { router } from 'expo-router';
import { COLORS,FONTS,SIZES } from '../../constants/colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res.user.emailVerified) {
        setError('Please verify your email before logging in.');
        return;
      }
      router.replace('/(tabs)/home');
    } catch (e) {
      setError(e.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
    <KeyboardAvoidingView 
     behavior={Platform.OS == 'ios'?'padding':'height'}
     style={styles.container} 
     
     >
       
        <Text style={styles.header}>Login</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} autoCapitalize="none" />
      <TextInput
        placeholder="Password"
        secureTextEntry={!show}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Pressable onPress={() => setShow(!show)}>
        <Text style={styles.link}>{show ? 'Hide' : 'Show'} Password</Text>
      </Pressable>
      {loading ? <ActivityIndicator /> : <Button title="Login" onPress={login} />}
      <Text style={styles.error}>{error}</Text>
      <Pressable onPress={() => router.push('/(auth)/register')}><Text style={styles.link}>No account? Register</Text></Pressable>
      <Pressable onPress={() => router.push('/(auth)/forgot')}><Text style={styles.link}>Forgot Password?</Text></Pressable>
    </KeyboardAvoidingView>
    </>
    
  );
}


const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: SIZES.base,
    marginBottom: SIZES.base,
    borderRadius: SIZES.radius,
  },
  error: {
    color: COLORS.error,
    marginVertical: 5,
  },
  link: {
    color: COLORS.link,
    marginVertical: 5,
  },
  header: {
    ...FONTS.header,
    marginBottom: 20,
  },
});

