import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
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
    <ImageBackground
      source={require('../assets/fondo3.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={require('../assets/LOGO_GABRIEL.png')} style={styles.profile} />

          <View style={styles.inputBox}>
            <TextInput
              placeholder=' Correo electrónico '
              style={{ paddingHorizontal: 30 }}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder='Contraseña'
              style={{ paddingHorizontal: 50 }}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.buttonBox} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
             <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
            <Text style={styles.buttonRegisterText}>Crear cuenta </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    width: '80%', // Ajusté el ancho de la tarjeta para que no ocupe el 100%
    padding: 60,
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
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonBox: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 160,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  buttonRegister:{
    borderBottomWidth:1,
    borderBottomColor:"blue",
  },
  buttonRegisterText:{
    color:"blue"
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
});

export default LoginScreen;
