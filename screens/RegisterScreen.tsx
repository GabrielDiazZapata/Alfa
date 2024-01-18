import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {
      const response = await fetch('http://172.16.100.150:8888/users/register', {
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

  return (
    <ImageBackground
      source={require('../assets/space.gif')}
      style={styles.backgroundImage}
    >

    <View style={styles.container}>
    <View style={styles.inputBox}>
      <Text>Registro de Usuario </Text>
      <TextInput
        placeholder="Nombre"
        value={name}
        style={styles.inputText1}
        onChangeText={(text) => setName(text)}
        />
      
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        style={styles.inputText2}
        onChangeText={(text) => setEmail(text)}
        />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        style={styles.inputText3}
        onChangeText={(text) => setPassword(text)}
        />
        <Button title="Registrar" onPress={handleRegister} />
      </View>
    </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    height: '60%',
    width:'100%',
    paddingVertical: 20,
    backgroundColor: 'rgba(204, 204, 204, 0.3)',
    borderRadius: 30,
    marginVertical: 10,
  },
  inputText1: {
    paddingHorizontal: 30,
    marginBottom: 10,
    marginTop: 10,
    
  },
  inputText2: {
    paddingHorizontal: 30,
  },
  inputText3: {
    paddingHorizontal: 30,
  },
});

export default RegisterScreen;
