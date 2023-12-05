// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainPage from './components/MainPage';
import { AuthProvider } from './components/AuthContext';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <AuthProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: "Welcome",
              headerTintColor: "#9acc77",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1f0a1d" },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Login",
              headerTintColor: "#9acc77",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1f0a1d" },
            }}
          />
          <Drawer.Screen
            name="Main"
            component={MainPage}
            options={{
              title: "Portfolio",
              headerTintColor: "#9acc77",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#1f0a1d" },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
