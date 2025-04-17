import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';


// Componente ClassesAssignedScreen
export default function ClassesAssignedScreen() {
  const router = useRouter();
  const local = useLocalSearchParams();
  

  // Las clases o asignaturas
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
  // (Mostrandonos detalles de la clase o asignatura)
  const handleClassPress = (className: string) => {
    router.navigate({
      pathname: '/clase-detalles',
      params: {
        classroom: local.classroom,
        className: className
      }
    });
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aula Seleccionada:</Text>
      <Text style={styles.classroomName}>{local.classroom}</Text>

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


// Estilos
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
