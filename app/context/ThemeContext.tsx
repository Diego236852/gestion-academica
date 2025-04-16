import { createContext, useContext, useState, ReactNode } from 'react';
import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: DefaultTheme,
  mode: 'light',
  toggleTheme: () => {},
});


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prevMode) => ((prevMode === 'light') ? 'dark' : 'light'));
  };

  const theme = (mode === 'dark') ? DarkTheme : DefaultTheme;

  
  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useThemeContext = () => useContext(ThemeContext);
