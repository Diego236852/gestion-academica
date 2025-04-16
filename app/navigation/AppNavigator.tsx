import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tipos
import { RootStackParamList } from '@/app/types/navigation';

// Componentes
import SplashScreen from '@/app/screens/SplashScreen';
import LoginScreen from '@/app/screens/LoginScreen';
import ClassroomsScreen from '@/app/screens/ClassroomsScreen';
import DirectorMainMenu from '@/app/screens/DirectorMainMenu';
import OptionsScreen from '@/app/screens/OptionsScreen';
import ClassesAssignedScreen from '@/app/screens/ClassesAssignedScreen';
import ClassDetailScreen from '@/app/screens/ClassDetailScreen';
import TeachersDataScreen from '@/app/screens/TeachersDataScreen';

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
