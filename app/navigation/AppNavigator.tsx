import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ClassroomsScreen from '../screens/ClassroomsScreen';
import DirectorMainMenu from '../screens/DirectorMainMenu';
import OptionsScreen from '../screens/OptionsScreen';
import ClassesAssignedScreen from '../screens/ClassesAssignedScreen';
import ClassDetailScreen from '../screens/ClassDetailScreen';
import TeachersDataScreen from '../screens/TeachersDataScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
