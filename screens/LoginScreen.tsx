import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAuth } from '../components/AuthContext';


const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<NavigationProp<any>>();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      if (email && password) {
        const loginSuccess = await login(email, password);

        if (loginSuccess) {
          navigation.navigate('Welcome');
        } else {
          setError('Error de inicio de sesión: Credenciales incorrectas');
        }
      } else {
        setError('Error de inicio de sesión: Correo electrónico y contraseña son necesarios');
      }
    } catch (error: any) {
      console.error('Error en el manejo del inicio de sesión:', error.message);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registrarse');
  };

  return (
    <View style={styles.container}>
      <Text>Inicio de Sesión </Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.buttonBox} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.buttonRegisterText}>Crear cuenta </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  buttonBox: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 160,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonRegister: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  buttonRegisterText: {
    color: 'blue',
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
});

export default LoginScreen;
