import { View, TextInput, Button, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const json = await response.json();

      if (json.success) {
        // Login exitoso, mostrar pantalla de bienvenida
        setLoggedIn(true);
        setUserRole(json.data.role); // Modificamos la línea para obtener el valor de "role" desde "data"
        setShowLogoutButton(true);
      } else {
        // Login fallido
        alert('Error', json.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserRole('');
    setShowLogoutButton(false);
  };

  useEffect(() => {
    if (loggedIn) {
      console.log('El usuario ha iniciado sesión');
    }
  }, [loggedIn]);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./DV.png')} style={styles.logo} />
        
        {showLogoutButton && <Button color="black" title="Cerrar sesión" onPress={handleLogout}/>}
      </View>
     
      {loggedIn ? (
        <>
          {userRole === 'admin' ? (
            <View style={styles.content}>
              <Text style={styles.welcome}>¡Bienvenido Admin!</Text>
              
              
              
            </View>
          ) : (

              <View style={styles.container}>
                            <View style={styles.content}>
              <Text style={styles.welcome}>¡Bienvenido!</Text>
              
              
              
      <View style={styles.header}>
  
       
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[
            styles.menuOption,
            selectedOption === 'Perfil' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Perfil')}
        >
          <Text style={styles.menuOptionText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuOption,
            selectedOption === 'Rutinas' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Rutinas')}
        >
          <Text style={styles.menuOptionText}>Rutinas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuOption,
            selectedOption === 'Dietas' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('Dietas')}
        >
          <Text style={styles.menuOptionText}>Dietas</Text>
        </TouchableOpacity>
      </View>
      {selectedOption ? (
        <View style={styles.optionContent}>
          <Text style={styles.optionContentText}>
            Este es el contenido de la opción {selectedOption}.
          </Text>
        </View>
      ) : (
        <View style={styles.placeholderContent}>
          <Text style={styles.placeholderText}>Seleccione una opción.</Text>
        </View>
      )}
    </View>
            </View>
          )}
         
        </>
      ) : (
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Button color="black" title="Iniciar sesión" onPress={handleLogin} />
        </View>
      )}
     
    </SafeAreaView>
    
    
  );
};
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#0d1b2a', // Color de fondo negro
  alignItems: 'center',
  justifyContent: 'center',
  },
  lb:{
    alignItems:'center'
  },
  logoContainer: {
  marginTop: 50,
  marginBottom: 30,
  },
  logo: {
  width: 200,
  height: 200,
  },
  content: {
  alignItems: 'center',
  justifyContent: 'center',
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
  welcome: {
  fontSize: 15,
  fontWeight: 'bold',
  color: 'white',
  },
  logoutButton: {
  marginTop: 20,
  backgroundColor: '#e74c3c', // Color rojo
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 20,
  },
  logoutText: {
  color: 'white',
  fontWeight: 'bold',
  },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  headerTitle: {
    color: '#0f0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#0d1b2a',
  },
  menuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0f0',
  },
  selectedOption: {
    backgroundColor: '#0f0',
  },
  menuOptionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  optionContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContentText: {
    color: '#0f0',
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholderContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
   
    color: '#0f0',
    fontSize: 20,
    fontWeight: 'bold',
    },
  });
  
  export default App;