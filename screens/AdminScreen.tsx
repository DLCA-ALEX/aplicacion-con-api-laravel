import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AdminScreen = ({ navigation }) => {
  const [totalVisits, setTotalVisits] = useState(120);
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    age: 32,
    email: "juan.perez@example.com",
    occupation: "Administrador de sistemas"
  });

  const handleLogout = () => {
    // Lógica para cerrar sesión
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Cerrar sesión" onPress={handleLogout} />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Administrador</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil</Text>
        <Text style={styles.sectionText}>Nombre: {profile.name}</Text>
        <Text style={styles.sectionText}>Edad: {profile.age}</Text>
        <Text style={styles.sectionText}>Email: {profile.email}</Text>
        <Text style={styles.sectionText}>Ocupación: {profile.occupation}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total de Visitas por Día</Text>
        <Text style={styles.sectionText}>Lunes: {Math.floor(Math.random() * 50)}</Text>
        <Text style={styles.sectionText}>Martes: {Math.floor(Math.random() * 50)}</Text>
        <Text style={styles.sectionText}>Miércoles: {Math.floor(Math.random() * 50)}</Text>
        <Text style={styles.sectionText}>Jueves: {Math.floor(Math.random() * 50)}</Text>
        <Text style={styles.sectionText}>Viernes: {Math.floor(Math.random() * 50)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total de Visitas</Text>
        <Text style={styles.sectionText}>Hasta el momento: {totalVisits}</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
    
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#0f0'
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
    color:'white'
  },
  button: {
    backgroundColor: '#0d1b2a',
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

export default AdminScreen;