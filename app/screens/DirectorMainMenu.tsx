import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipos
import { RootStackParamList } from '@/types/navigation';

type DirectorMainMenuNavigationProp = NativeStackNavigationProp<RootStackParamList, 'DirectorMenu'>;

type Props = {
  navigation: DirectorMainMenuNavigationProp;
};


// Componente DirectorMainMenu
export default function DirectorMainMenu({ navigation } : Readonly<Props>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú del Director</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Classrooms')}
      >
        <Text style={styles.buttonText}>📚 Ver Aulas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TeachersData')}  // Navega a TeachersDataScreen
      >
        <Text style={styles.buttonText}>➕ Añadir Maestro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>🚪 Cerrar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OptionsScreen')}
      >
        <Text style={styles.buttonText}>⚙️Opciones</Text>
      </TouchableOpacity>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#1F2937',
  },
  buttonGroup: {
    gap: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
    maxWidth: 400,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
