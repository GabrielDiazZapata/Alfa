import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native';

type LoginProps = {
  navigation: any; // Asegúrate de usar el tipo de navegación adecuado aquí
};
export default function Login(props: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();

  function logearte(): void {
    if (email && password) {
      // Solo si ambos campos están llenos, navegar a WelcomeScreen
      navigation.navigate('Main');
    } else {
      console.log('Error de inicio de sesión: Correo electrónico y contraseña son necesarios');
    }
  }

  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/LOGO_GABRIEL.png')} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput placeholder=' Correo electrónico ' style={{ paddingHorizontal: 15 }} onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={styles.cajaTexto}>
          <TextInput placeholder='Contraseña' style={{ paddingHorizontal: 15 }} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logearte}>
            <Text style={styles.textoBoton}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderBlockColor: 'white'
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: '#cccccc40',
    borderRadius: 30,
    marginVertical: 10
  },
  PadreBoton: {
    alignItems: 'center',
  },
  cajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20
  },
  textoBoton: {
    textAlign: 'center',
    color: 'white'
  }
});
