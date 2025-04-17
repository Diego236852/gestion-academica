import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/navigation/AppNavigator';
import { ThemeProvider, useThemeContext } from './components/context/ThemeContext';

const AppContent = () => {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
