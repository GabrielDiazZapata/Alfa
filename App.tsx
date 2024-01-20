import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainPage from './components/MainPage';
import { AuthProvider, useAuth } from './components/AuthContext';
import RegisterScreen from './screens/RegisterScreen';
import { Image, TouchableOpacity } from 'react-native';

export default function App() {
  const Drawer = createDrawerNavigator();

  const MainNavigator = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
      try {
        await logout();
      } catch (error: any) {
        console.error('Error del logout:', error.message);
      }
    };

    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
            headerTintColor: '#9acc77',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#1f0a1d' },
            headerRight: () => (
              <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                <Image source={require('./assets/logout.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerTintColor: '#9acc77',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#1f0a1d' },
            headerRight: () => (
              <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                <Image source={require('./assets/logout.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Registrarse"
          component={RegisterScreen}
          options={{
            title: 'Crear Cuenta',
            headerTintColor: '#9acc77',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#1f0a1d' },
            headerRight: () => (
              <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                <Image source={require('./assets/logout.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Main"
          component={MainPage}
          options={{
            title: 'Portfolio',
            headerTintColor: '#9acc77',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#1f0a1d' },
            headerRight: () => (
              <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                <Image source={require('./assets/logout.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
