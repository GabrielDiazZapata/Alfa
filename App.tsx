import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import MainPage from './components/MainPage';

export default function App() {
  const Stack = createStackNavigator();
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Puedes agregar tu pantalla de Login aquí */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "LOGIN",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" },
          }}
        />
        {/* Tu pantalla de bienvenida */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "ALFA",
            headerTintColor: "#1f0a1d",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#e5ead4" },
          }}

        />
      <Stack.Screen
          name="Main"
          component={() => <MainPage isEnabled={isEnabled} />}
          options={{
            title: "Portfolio",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#525FE1" },
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
