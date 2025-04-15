import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';  // Asegúrate de importar el tipo

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ClassroomsScreen from '../screens/ClassroomsScreen';
import DirectorMainMenu from '../screens/DirectorMainMenu';

// Aplicar el tipo de navegación
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="DirectorMenu" component={DirectorMainMenu} />
      <Stack.Screen name="Classrooms" component={ClassroomsScreen} />
    </Stack.Navigator>
  );
}
