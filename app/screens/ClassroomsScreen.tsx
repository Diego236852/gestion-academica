import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

const ClassroomScreen = () => {
  const [currentGrade, setCurrentGrade] = useState(0);
  const [selectedClassrooms, setSelectedClassrooms] = useState<string[]>([]);

  const { width } = useWindowDimensions();

  const grades = ["Primaria", "Secundaria", "Preescolar"];

  const classrooms = [
    ["1er A", "1er B", "1er C", "2do A", "2do B", "2do C", "3er A", "3er B", "3er C"],
    ["4to A", "4to B", "4to C", "5to A", "5to B", "5to C", "6to A", "6to B", "6to C"],
  ];

  const handleNextPage = () => {
    if (currentGrade < classrooms.length - 1) {
      setCurrentGrade(currentGrade + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentGrade > 0) {
      setCurrentGrade(currentGrade - 1);
    }
  };

  const toggleSelection = (classroom: string) => {
    if (selectedClassrooms.includes(classroom)) {
      setSelectedClassrooms(selectedClassrooms.filter(item => item !== classroom));
    } else {
      setSelectedClassrooms([...selectedClassrooms, classroom]);
    }
  };

  const classroomBoxSize = width / 3.5; // se ajusta a 3 columnas con margen

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.schoolLevel}>Primaria</Text>
        <Text style={styles.teacherInfo}>Xdo - Xdo Grado</Text>
      </View>

      {/* Classrooms */}
      <FlatList
        data={classrooms[currentGrade]}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.classroomList}
        renderItem={({ item }) => {
          const isSelected = selectedClassrooms.includes(item);
          return (
            <TouchableOpacity
              style={[
                {
                  width: classroomBoxSize,
                  height: classroomBoxSize,
                },
                styles.classroom,
                isSelected && styles.classroomSelected,
              ]}
              onPress={() => toggleSelection(item)}
            >
              <Text style={styles.classroomText}>Grado X</Text>
              <Text style={styles.classroomText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />

      {/* Pagination */}
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

export default ClassroomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
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
  classroomList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  classroom: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classroomSelected: {
    backgroundColor: '#999',
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
