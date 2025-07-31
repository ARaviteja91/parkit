import { View, Text,Button, ScrollView, Pressable, StyleSheet, Alert } from 'react-native'
import React from 'react'
import ProfileInfo from '../../../components/ProfileInfo'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';

const profile = () => {
  const logout = async () => {
        Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut(auth);
              router.replace('/(auth)/login');
            } catch (error) {
              Alert.alert('Error', 'Logout failed.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
    <ScrollView  >
      <ProfileInfo/>
      <Pressable style={styles.logout}  onPress={logout} >
        <Text>Logout</Text>
      </Pressable>
    </ScrollView>
     
    </>
  )
}

const styles = StyleSheet.create({
  logout:{
    margin:15,
    backgroundColor:'#ffbdbd',
    padding:5
  }
})

export default profile