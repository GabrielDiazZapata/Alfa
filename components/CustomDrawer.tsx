import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainPage from './MainPage';
import RegisterScreen from '../screens/RegisterScreen';
import MicrophoneScreen from '../screens/MicrophoneScreen';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {



  return (
    <Drawer.Navigator initialRouteName='Welcome'>
      <Drawer.Screen name='Welcome' component={WelcomeScreen} />
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name='Portfolio' component={MainPage} />
      <Drawer.Screen name='Register' component={RegisterScreen} />
      <Drawer.Screen name='Microphone' component={MicrophoneScreen} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerTitle: {

  }
})