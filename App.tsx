import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import MainPage from './components/MainPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
export default function App() {
  const Stack = createStackNavigator();
  const [isEnabled, setIsEnabled] = useState(false);
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* Puedes agregar tu pantalla de Login aquí */}
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "LOGIN",
            headerTintColor: "#9acc77",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#1f0a1d" },
          }}
        />
        {/* Tu pantalla de bienvenida */}
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: "ALFA",
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
  );
}
