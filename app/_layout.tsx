import { StatusBar } from 'expo-status-bar';

// Componentes
import AppNavigator from '@/app/navigation/AppNavigator';


// El punto de entrada de la app
export default function Layout() {
  return (
    <>
      <AppNavigator />
      <StatusBar style='dark' />
    </>
  )
}
