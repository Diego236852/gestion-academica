import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { ThemeProviderV2, useThemeContext } from '@/components/context/ThemeContext';


// El punto de entrada de la app
export default function RootLayout() {
  const { theme } = useThemeContext();
  
  
  return (
    <ThemeProviderV2>
      <ThemeProvider value={theme}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style='dark' />
      </ThemeProvider>
    </ThemeProviderV2>
  )
}
