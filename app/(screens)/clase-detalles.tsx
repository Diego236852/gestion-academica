import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


// Componente ClassDetailScreen
export default function ClassDetailScreen() {
  const local = useLocalSearchParams();

  
  // Indicadores de logro fijos para todas las clases (a futuro serán creados o actualizados por el backend)
  const achievementIndicators = [
    'Indicador 1: Domina los conceptos básicos',
    'Indicador 2: Aplica lo aprendido en situaciones reales',
    'Indicador 3: Muestra iniciativa en la resolución de problemas',
    'Indicador 4: Colabora efectivamente con sus compañeros',
  ];

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de la Clase</Text>
      <Text style={styles.detail}>Aula: {local.classroom}</Text>
      <Text style={styles.detail}>Clase: {local.className}</Text>

      <Text style={styles.subtitle}>Indicadores de Logro:</Text>
      <FlatList
        data={achievementIndicators}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.indicatorCard}>
            <Text style={styles.indicatorText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  indicatorCard: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    width: '100%',
  },
  indicatorText: {
    fontSize: 16,
    color: '#555',
  },
});
