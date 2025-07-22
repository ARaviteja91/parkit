import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const { user } = useAuth();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const decideRoute = async () => {
      if (!user) {
        router.replace('/(auth)/login');
      } else {
        const hasSeenWelcome = await AsyncStorage.getItem('hasSeenWelcome');
        if (hasSeenWelcome === 'true') {
          router.replace('/(tabs)/home');
        } else {
          router.replace('/(auth)/welcome');
        }
      }
      setChecking(false);
    };

    decideRoute();
  }, [user]);

  return null;
}
