import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native'; // importamos el hook del tema
import { useThemeContext } from '../context/ThemeContext';

const OptionsScreen = () => {
  const { mode, toggleTheme } = useThemeContext();
  const { colors } = useTheme(); // obtenemos colores del tema actual

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Pantalla de Opciones</Text>

      <View style={[styles.optionRow, { borderBottomColor: colors.border || '#ccc' }]}>
        <Text style={[styles.optionText, { color: colors.text }]}>Modo Oscuro</Text>
        <Switch value={mode === 'dark'} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 18,
  },
});
