import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getAuth,updateProfile } from 'firebase/auth';

const ProfileInfo = () => {
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    // Helper: Generate name from email
  const generateNameFromEmail = (email) => {
    if (!email) return 'User';
    const namePart = email.split('@')[0];
    const words = namePart.split(/[._-]/).filter(Boolean);
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      setLoading(false);
      return;
    }

    // If displayName is missing, generate and update it
    if (!currentUser.displayName && currentUser.email) {
      const generatedName = generateNameFromEmail(currentUser.email);

      updateProfile(currentUser, {
        displayName: generatedName
      })
        .then(() => {
          // Reload user data after update
          setUser({ ...currentUser, displayName: generatedName });
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to update profile:', error);
          setUser(currentUser);
          setLoading(false);
        });
    } else {
      setUser(currentUser);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.center}>
        <Text>No user is currently logged in.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text>{user.displayName || 'N/A'}</Text>

      <Text style={styles.label}>Email:</Text>
      <Text>{user.email || 'N/A'}</Text>

       
    </View>
  )
}


const styles = StyleSheet.create({
 container: {
   padding: 16,
 },
 label: {
   fontWeight: 'bold',
   marginTop: 8,
 },
 center: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 }
});
export default ProfileInfo


 