import { Tabs } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { Redirect } from 'expo-router';


export default function TabsLayout() {
  const { user } = useAuth(); 
  
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <>
    <Tabs screenOptions={{headerShown:false}} >
      <Tabs.Screen name="home" options={{ title: 'Home'}} />
      <Tabs.Screen name="wishlist" options={{ title: 'Wishlist' }} />
      <Tabs.Screen name="booking" options={{ title: 'Booking' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ href:null }} />
    </Tabs>
    </>
  );
}
