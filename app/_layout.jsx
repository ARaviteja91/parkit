import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


export default function RootLayout() {
  return (
    <>
    <StatusBar value="auto"  />
    <Stack
      screenOptions={{
        headerStyle:{
          backgroundColor:'#fa6f1d',
        },
        headerTintColor: '#fff',
        headerBackVisible:false
      }}
    >
        <Stack.Screen name='index' options={{headerShown:false}} />
        <Stack.Screen 
            name='login' 
            options={{
                title:'Login',                 
            }} 
        />
        <Stack.Screen 
            name='register' 
            options={{
                title:'Register',                 
            }} 
        />
        <Stack.Screen 
            name='forgotPassword' 
            options={{
              title:'Frgot Password'
            }} 
        />
        <Stack.Screen name='(dashboard)' options={{headerShown:false}} />
    </Stack>
    </>
  )
}