import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { router } from 'expo-router';

export default function Home() {
  const logout = async () => {
    await signOut(auth);
    router.replace('/(auth)/login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Home</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
