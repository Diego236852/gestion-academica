import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation'; // Asegúrate de ajustar la ruta según tu estructura

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = () => {
    if (username && pin) {
      navigation.navigate('Classrooms');
    } else {
      alert('Por favor, ingrese el usuario y el PIN');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
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

export default LoginScreen;


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
