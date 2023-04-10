import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Pantalla para el rol de Admin
const AdminScreen = () => {
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
      <Text style={styles.title}>Bienvenido, Admin</Text>
      <Text style={styles.subtitle}>Aquí puedes administrar los usuarios</Text>
      {/* Agregar aquí los componentes necesarios para administrar los usuarios */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AdminScreen;