import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth } from '../components/AuthContext'; 

type LoginProps = {
  navigation: NavigationProp<any>;
};

const LoginScreen: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();
  const { login } = useAuth(); // Utilizo el método de login desde el contexto de autenticación

  const handleLogin = () => {
    if (email && password) {
      // Intenta iniciar sesión
      const loginSuccess = login(email, password);

      if (loginSuccess) {
        // Inicio de sesión exitoso, navegar a WelcomeScreen
        navigation.navigate('Welcome');
      } else {
        setError('Error de inicio de sesión: Credenciales incorrectas');
      }
    } else {
      // Correo electrónico y contraseña son necesarios
      setError('Error de inicio de sesión: Correo electrónico y contraseña son necesarios');
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    width: '100%',
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
});

export default LoginScreen;
