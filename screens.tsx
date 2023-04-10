import React from 'react';
import { View, Button } from 'react-native';

const AdminScreen = ({ onLogout }) => {
  return (
    <View>
      {/* Contenido de la pantalla de administrador */}
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
};

const UserScreen = ({ onLogout }) => {
  return (
    <View>
      {/* Contenido de la pantalla de usuario */}
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
};

export { AdminScreen, UserScreen };