import { Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/SignIn';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#1d1d2e' translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

