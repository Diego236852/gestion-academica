import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

// La imagen del logo
const logoImagen = require('@/assets/images/logo.png');


// Componente LoginScreen
export default function LoginScreen() { // Props marcados como readonly para silenciar a TS
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');


  // Si la validacion es exitosa, redirigirlo al menu de director;
  // de lo contrario, pedirle que ingrese sus credenciales
  const handleLogin = () => {
    if (username && pin) {
      router.navigate('/director-menu');
    } else {
      alert('Por favor, ingrese el usuario y el PIN');
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={logoImagen}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.form}>
        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#999"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="PIN"
          placeholderTextColor="#999"
          secureTextEntry
          keyboardType="numeric"
          style={styles.input}
          value={pin}
          onChangeText={setPin}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 600, // Límite para pantallas grandes
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  button: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#007aff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
