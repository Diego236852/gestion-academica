import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipos
import { RootStackParamList } from '@/app/types/navigation';


// Componente ClassroomsScreen
export default function ClassroomsScreen() {
  const [currentGrade, setCurrentGrade] = useState(0);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width, height } = useWindowDimensions();
  
  
  const isPortrait = height >= width;

  // Los grados posibles
  const grades = ['Preescolar', 'Primaria', 'Secundaria'];

  // Todas las aulas posibles
  const classrooms = [
    ['1er Nivel A', '2do Nivel B', '3er Nivel C'],
    [
      '1er A', '1er B', '1er C', '2do A', '2do B', '2do C', '3er A', '3er B', '3er C',
      '4to A', '4to B', '4to C', '5to A', '5to B', '5to C', '6to A', '6to B', '6to C',
    ],
    [
      '7mo A', '7mo B', '7mo C', '8vo A', '8vo B', '8vo C',
      '9no A', '9no B', '9no C', '10mo A', '10mo B', '10mo C',
      '11mo A', '11mo B', '11mo C',
    ],
  ];

  // Ir a la siguiente pagina
  const handleNextPage = () => {
    setCurrentGrade((prevGrade) => (prevGrade + 1) % classrooms.length);
  };

  // Ir a la pagina anterior
  const handlePrevPage = () => {
    setCurrentGrade((prevGrade) => (prevGrade - 1 + classrooms.length) % classrooms.length);
  };

  // Ir al aula seleccionada
  const handleClassroomPress = (classroom: string) => {
    navigation.navigate('ClassesAssigned', { classroom });
  };

  
  // Cuantas columnas deberian de mostrarse?
  const getColumns = () => {
    if (isPortrait && width < 400) return 1;
    if (width < 600) return 3;
    return 4;
  };

  const columns = getColumns();
  const sidePadding = 20;
  const gap = 12;
  const classroomBoxSize = (width - sidePadding * 2 - gap * (columns - 1)) / columns;

  
  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <Text style={styles.schoolLevel}>{grades[currentGrade]}</Text>
        <Text style={styles.teacherInfo}>Xdo - Xdo Grado</Text>
      </View>

      {/* La lista de todas las aulas */}
      <FlatList
        data={classrooms[currentGrade]}
        keyExtractor={(item, index) => index.toString()}
        numColumns={columns}
        key={columns}
        contentContainerStyle={{
          paddingHorizontal: sidePadding,
          justifyContent: isPortrait ? 'center' : 'flex-start',
        }}
        
        columnWrapperStyle={
          columns > 1 && {
            justifyContent: isPortrait ? 'center' : 'space-between',
            marginBottom: gap,
          }
        }
        
        // Cada una de las aulas
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              {
                width: columns === 1 ? '100%' : classroomBoxSize,
                height: classroomBoxSize,
                alignSelf: columns === 1 ? 'center' : 'auto',
              },
              styles.classroom,
            ]}
            onPress={() => handleClassroomPress(item)}
          >
            <Text style={styles.classroomText}>Grado X</Text>
            <Text style={styles.classroomText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Controles para navegacion */}
      <View style={styles.pagination}>
        <TouchableOpacity onPress={handlePrevPage} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '100%',
    marginBottom: 10,
  },
  schoolLevel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  teacherInfo: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-end',
  },
  classroom: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classroomText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginTop: 10,
  },
  arrowButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 8,
  },
  arrowText: {
    color: '#fff',
    fontSize: 20,
  },
});
