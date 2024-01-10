import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
const RegisterScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/fondo3.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.card}>
        <View style={styles.inputBox}>
            <TextInput
              placeholder='Nombre'
              style={{ paddingHorizontal: 70 }}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              placeholder=' Correo electrónico '
              style={{ paddingHorizontal: 30 }}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder='Contraseña'
              style={{ paddingHorizontal: 50 }}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonBox} >
            <Text style={styles.buttonText}>Crear Cuenta</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ImageBackground>
  );
};

         

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    width: '100%',
    padding: 70,
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonBox: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 160,
    marginTop: 20,
    marginBottom:20
  },
  buttonRegister:{
    borderBottomWidth:1,
    borderBottomColor:"blue",
  },
  buttonRegisterText:{
    color:"blue"
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})