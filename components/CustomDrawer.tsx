import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainPage from './MainPage';
import appColors from '../assets/Styles/appColors';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {

  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerTitle: 'ALFA',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: appColors.primary
    },
    headerTintColor: appColors.white,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: appColors.white,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: 'lightgray',
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide'
  }

  return (
    <Drawer.Navigator initialRouteName='Welcome' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
      <Drawer.Screen name='Login' component={LoginScreen} />
      <Drawer.Screen name='Main'component={MainPage}
 />
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