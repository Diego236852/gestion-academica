import { createNativeStackNavigator } from 'expo-router-stack';

// Tipos
import { RootStackParamList } from '@/types/navigation';

// Componentes
import SplashScreen from '@/components/screens/SplashScreen';
import LoginScreen from '@/components/screens/LoginScreen';
import ClassroomsScreen from '@/components/screens/ClassroomsScreen';
import DirectorMainMenu from '@/components/screens/DirectorMainMenu';
import OptionsScreen from '@/components/screens/OptionsScreen';
import ClassesAssignedScreen from '@/components/screens/ClassesAssignedScreen';
import ClassDetailScreen from '@/components/screens/ClassDetailScreen';
import TeachersDataScreen from '@/components/screens/TeachersDataScreen';

// Crear el stack
const Stack = createNativeStackNavigator<RootStackParamList>();


// Componente AppNavigator
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="DirectorMenu" component={DirectorMainMenu} />
      <Stack.Screen name="Classrooms" component={ClassroomsScreen} />
      <Stack.Screen name="OptionsScreen" component={OptionsScreen} />
      <Stack.Screen name="ClassesAssigned" component={ClassesAssignedScreen} />
      <Stack.Screen name="ClassDetails" component={ClassDetailScreen} />
      <Stack.Screen name="TeachersData" component={TeachersDataScreen} />
    </Stack.Navigator>
  );
}
