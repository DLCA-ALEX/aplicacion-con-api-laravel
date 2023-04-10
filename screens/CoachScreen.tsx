import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Pantalla para el rol de Admin
const CoachScreen = () => {
  const navigation = useNavigation();

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
      <Text style={styles.title}>Bienvenido, Coach</Text>
      <Text style={styles.subtitle}>Aquí puedes ver tus clientes y su progreso:</Text>
      <View style={styles.clientList}>
        <View style={styles.client}>
          <Text style={styles.clientName}>Juan Pérez</Text>
          <Text style={styles.clientProgress}>80% de progreso</Text>
        </View>
        <View style={styles.client}>
          <Text style={styles.clientName}>María García</Text>
          <Text style={styles.clientProgress}>60% de progreso</Text>
        </View>
        <View style={styles.client}>
          <Text style={styles.clientName}>Pedro Martínez</Text>
          <Text style={styles.clientProgress}>90% de progreso</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  clientList: {
    width: '100%',
    marginTop: 20,
  },
  client: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  clientName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clientProgress: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CoachScreen;