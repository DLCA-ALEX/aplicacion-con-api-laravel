import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const UserScreen = () => {
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

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        
        <View style={styles.container}>
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
    );
  };
  const styles = StyleSheet.create({

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#0f0'
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 20,
      color: '#0f0'
    },
    container: {
      flex: 1,
      backgroundColor: '#0d1b2a',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    logo: {
      width: 50,
      height: 50,
      marginRight: 10,
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
      color: '#0f0',
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
  

  export default UserScreen;