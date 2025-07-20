// app/recover.jsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function forgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Enter a valid email.';
    if (newPassword.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRecovery = () => {
    if (!validate()) return;
    alert('Password reset successfully!');
    router.replace('/login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.heading}>Recover Password</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <View style={styles.passwordWrapper}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.toggle}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TouchableOpacity style={styles.recoverButton} onPress={handleRecovery}>
            <Text style={styles.recoverText}>Reset Password</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text style={styles.loginLink}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  innerContainer: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  heading: { fontSize: 30, fontWeight: '600', textAlign: 'center', color: '#111827', marginBottom: 24 },
  formContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3 },
  input: { borderWidth: 1, borderColor: '#d1d5db', padding: 12, borderRadius: 8, marginBottom: 12, fontSize: 16 },
  passwordWrapper: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  toggle: { marginLeft: 10, color: '#3b82f6', fontWeight: '600' },
  error: { color: '#dc2626', fontSize: 13, marginBottom: 8 },
  recoverButton: { backgroundColor: '#10b981', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  recoverText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  loginLink: { textAlign: 'center', color: '#2563eb', fontSize: 14 },
});
