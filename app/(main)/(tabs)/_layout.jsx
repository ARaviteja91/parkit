import { Tabs } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';
import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';



export default function TabsLayout() {
  const { user } = useAuth(); 
  
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <>
    <StatusBar/>
    <Tabs 
      screenOptions={{
        headerShown:false,
        tabBarStyle:{height:60},
        tabBarActiveTintColor:'#fa681a'
      }}
      
    
    >
      <Tabs.Screen name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon:({focused})=>{ 
            return <Ionicons 
                    name={'home-outline'} 
                    size={24}
                    color={focused?'#fa681a':'grey'} 
                    />
          } 

        }} 
      />
      <Tabs.Screen 
        name="wishlist" 
        options={{ 
          title: 'Wishlist' ,
          tabBarIcon:({focused})=>{
            return <Ionicons  
                    name={'heart-outline'}
                    size={24}
                    color={focused?'#fa681a':'grey'}
                  />
          }
        }} 
      />
      <Tabs.Screen 
        name="booking" 
        options={{ 
          title: 'Booking',
          tabBarIcon:({focused})=>{
            return <Ionicons
            name={'calendar-outline'}
            size={24}
            color={focused?'#fa681a':'grey'}
            />
          } 
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profile' ,
          tabBarIcon:({focused})=>{
            return <Ionicons  
              name={'person-outline'}
              size={24}
              color={focused?'#fa681a':'grey'}
            />
          }
        }} 
        />
      <Tabs.Screen name="settings" options={{ href:null }} />
    </Tabs>
    </>
  );
}
