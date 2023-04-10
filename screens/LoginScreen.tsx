import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const logo = require('../assets/DV.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://10.0.2.2:8000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          // Si el login es exitoso, redirigimos a la pantalla correspondiente
          const role = responseJson.data.role;
          if (role === 'admin') {
            navigation.navigate('Admin');
          }  
          else if (role === 'coach') {
            navigation.navigate('Coach');
          }
          
          else {
            navigation.navigate('User');
          }
        } else {
          alert(responseJson.error);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 flex: 1,
  backgroundColor: '#0d1b2a', // Color de fondo negro
  alignItems: 'center',
  justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#2ecc71', // Color verde fosforescente
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 8,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default LoginScreen;