import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Welcome from './screens/Welcome';
import Login from './screens/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: "LOGIN",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#525FE1" },
      }}
    />
    <Stack.Screen
      name="Home"
      component={Welcome}
      options={{
        title: "HOME",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#525FE1" },
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        {/* Agrega más Drawer.Screen para otras pantallas */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
