import { View, Text,Button, ScrollView, Pressable, StyleSheet, Alert } from 'react-native'
import React from 'react'
import ProfileInfo from '../../../components/ProfileInfo'
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';

const profile = () => {

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: logout,
        },
      ],
      { cancelable: true }
    );
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
    <ScrollView  >
      <ProfileInfo/>
      <Pressable style={styles.logout}  onPress={confirmLogout} >
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