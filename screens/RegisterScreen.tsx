import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.1.135:8888/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

    

      const data = await response.json();

      if (response.ok) {
        console.log('Usuario registrado exitosamente', data);
      } else {
        console.error('Error en el registro:', data.message);
      }
    } catch (error: any) {
      console.error('Error de red:', error.message);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  

  return (
    <ImageBackground
      source={require('../assets/space3.gif')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <Text style={styles.title}>Registro de Usuario </Text>
          <TextInput
            placeholder="Nombre"
            value={name}
            style={styles.inputText }
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            placeholder="Correo Electrónico"
            value={email}
            style={styles.inputText}
            onChangeText={(text) => setEmail(text)}
          />
          
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            style={styles.inputText}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
            <Text style={styles.buttonRegisterText}>Registrar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister2} onPress={handleLogin} >
            <Text style={styles.buttonRegisterText2}>Iniciar Sesion </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: '50%',
    width: '80%',
    paddingVertical: 20,
    backgroundColor: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonRegister:{
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 160,
    marginTop: 20,
  },
  buttonRegisterText:{
    textAlign: 'center',
    color: 'white',
  },
  inputText: {
    textAlign: 'center',
    marginBottom: 10,
    width: '80%',
    borderColor: 'gray',
    backgroundColor:'white',
    borderRadius:30,
    borderWidth: 1,
    padding: 10,
  },
  buttonRegister2:{
    borderBottomWidth:1,
    borderBottomColor:"white",
  },
  buttonRegisterText2:{
    color:"white"
  },
  title: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
