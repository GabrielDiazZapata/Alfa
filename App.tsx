import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome';
import Login from './screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
