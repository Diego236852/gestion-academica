import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';


// Componente TeachersDataScreen
export default function TeachersDataScreen () {
  const [teacherNumber, setTeacherNumber] = useState(''); // Numero del maestro
  const [selectedClassroom, setSelectedClassroom] = useState(''); // La clase seleccionada
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]); // Las asignaturas seleccionadas
  const [isClassroomDropdownOpen, setIsClassroomDropdownOpen] = useState(false);

  
  // Lista completa de aulas disponibles (placeholder)
  const classrooms = [
    '1er Nivel A',
    '1er Nivel B',
    '1er Nivel C',
    '2do Nivel A',
    '2do Nivel B',
    '2do Nivel C',
    '3er Nivel A',
    '3er Nivel B',
    '3er Nivel C',
    '1er Grado A',
  ];

  // Lista de asignaturas (placeholder)
  const subjects = [
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

  
  // Alterna la selección de una asignatura
  // (Si esta dentro de los seleccionados, lo quitamos; de lo contrario, lo agregamos)
  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  // Función para simular el proceso de matriculación
  const handleEnroll = () => {
    if (!teacherNumber.trim()) {
      Alert.alert('Error', 'Por favor ingrese el número de usuario del docente.');
      return;
    }
    if (!selectedClassroom) {
      Alert.alert('Error', 'Por favor seleccione un aula.');
      return;
    }
    if (selectedSubjects.length === 0) {
      Alert.alert('Error', 'Por favor seleccione al menos una asignatura.');
      return;
    }
    
    // Simulación del envío de datos al backend
    Alert.alert(
      'Matriculación Exitosa',
      `Docente número: ${teacherNumber}\nAula: ${selectedClassroom}\nAsignaturas: ${selectedSubjects.join(', ')}`
    );
    
    // Reiniciar formulario (opcional)
    setTeacherNumber('');
    setSelectedClassroom('');
    setSelectedSubjects([]);
    setIsClassroomDropdownOpen(false);
  };

  
  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <Text style={styles.title}>Matricular Docente</Text>
      
      {/* Caja de texto para el numero de maestro */}
      <Text style={styles.subtitle}>Ingrese el número de usuario del docente:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de usuario"
        value={teacherNumber}
        onChangeText={setTeacherNumber}
        keyboardType="numeric"
      />

      {/* Un dropdown para seleccionar el aula */}
      <Text style={styles.subtitle}>Seleccione un aula a asignar:</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsClassroomDropdownOpen(prev => !prev)}
      >
        <Text style={styles.dropdownButtonText}>
          {selectedClassroom || 'Seleccione un aula'}
        </Text>
        
        <Text style={styles.dropdownArrow}>
          {isClassroomDropdownOpen ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      
      {/* Todas las aulas, contenidas dentro del dropdown */}
      {isClassroomDropdownOpen && (
        <View style={styles.dropdownContainer}>
          {classrooms.map(aula => {
            const isSelected = (selectedClassroom === aula);
            return (
              <TouchableOpacity
                key={aula}
                style={[
                  styles.dropdownItem,
                  isSelected && styles.dropdownItemSelected
                ]}
                onPress={() => {
                  setSelectedClassroom(aula);
                  setIsClassroomDropdownOpen(false);
                }}
              >
                <Text style={[
                  styles.dropdownItemText,
                  isSelected && styles.dropdownItemTextSelected
                ]}>
                  {aula}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* Solo se muestran las asignaturas si se ha seleccionado un aula */}
      {selectedClassroom ? (
        <>
          <Text style={styles.subtitle}>Seleccione las asignaturas a asignar:</Text>
          <View style={styles.optionsContainer}>
            {subjects.map(subject => {
              const isSelected = selectedSubjects.includes(subject);
              return (
                <TouchableOpacity
                  key={subject}
                  style={[
                    styles.optionButton,
                    isSelected && styles.optionButtonSelected
                  ]}
                  onPress={() => toggleSubject(subject)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected
                    ]}
                  >
                    {subject}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </>
      ) : null}

      {/* Boton para realizar la matricula */}
      <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
        <Text style={styles.enrollButtonText}>Matricular</Text>
      </TouchableOpacity>
    </View>
  );
};


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownArrow: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  dropdownItemSelected: {
    backgroundColor: '#2563EB',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItemTextSelected: {
    color: '#fff',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: '48%',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#2563EB',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionTextSelected: {
    color: '#fff',
  },
  enrollButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
