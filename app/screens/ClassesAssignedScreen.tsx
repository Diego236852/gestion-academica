import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Definimos el tipo para obtener los parámetros de la ruta
type ClassesAssignedRouteProp = RouteProp<RootStackParamList, 'ClassesAssigned'>;

const ClassesAssignedScreen = () => {
  const route = useRoute<ClassesAssignedRouteProp>();
  const { classroom } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const sampleClasses = [
    'Matemáticas',
    'Lengua y Literatura',
    'Ciencias Naturales',
    'Ciencias Sociales',
    'Historia',
    'Geografía',
    'Educación Física',
    'Informática',
    'Arte',
    'Música',
  ];

  // Al tocar una clase, navegamos a la pantalla ClassDetails
  const handleClassPress = (className: string) => {
    navigation.navigate('ClassDetails', { classroom, className });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aula Seleccionada:</Text>
      <Text style={styles.classroomName}>{classroom}</Text>

      <Text style={styles.subtitle}>Clases asignadas:</Text>

      <FlatList
        data={sampleClasses}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClassPress(item)}>
            <View style={styles.classCard}>
              <Text style={styles.classText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ClassesAssignedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#555',
  },
  classroomName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
  },
  classCard: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  classText: {
    fontSize: 16,
    color: '#444',
  },
});
