import { Drawer } from 'expo-router/drawer';
import { useAuth } from '../../context/AuthContext';
import { Redirect, router, Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawerContent=(props)=>{
    return(
        <DrawerContentScrollView>
                <DrawerItem 
                    label={"Home"} 
                    icon={(color,size)=>(
                        <Ionicons name='home' size={16} color={color} />
                    )}
                    onPress={()=>{
                        router.push('/profile')
                    }}
                />
        </DrawerContentScrollView>
    )
}


export default function DrawerLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <>
      <StatusBar />
      <GestureHandlerRootView>
        <Drawer
            drawerContent={
                (props)=><CustomDrawerContent {...props}/>
            }
            screenOptions={{headerTitle:'Parkit'}}
        />             
       </GestureHandlerRootView>
    </>
  );
}
