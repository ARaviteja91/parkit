import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const DashboardLayout = () => {
  return (
    <>
    <StatusBar 
      animated={true}
      barStyle={'dark-content'}
    />
    <Tabs 
        screenOptions={{
          headerShown:false,
        }}
        >
        <Tabs.Screen name='home' options={{title:'Home'}} />
        <Tabs.Screen name='wishlist' options={{title:'Wishlist'}} />
        <Tabs.Screen name='booking' options={{title:'Booking'}} />
        <Tabs.Screen name='account' options={{title:'Account'}} />

    </Tabs>
    </>
  )
}

export default DashboardLayout