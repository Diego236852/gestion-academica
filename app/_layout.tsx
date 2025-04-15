import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator';

export default function Layout() {
  return (
    <>
      <AppNavigator />
      <StatusBar style='dark' />
    </>
  )
}
