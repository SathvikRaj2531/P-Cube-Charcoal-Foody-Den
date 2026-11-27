import { createContext, useContext, useEffect } from 'react';

// The site is dark-only. There is no user-facing theme switch; this provider
// just guarantees the `dark` class is on <html> (the prerendered HTML already has it).
const ThemeContext = createContext({ theme: 'dark' });
const VALUE = { theme: 'dark' };

export function ThemeProvider({ children }) {
  useEffect(() => { document.documentElement.classList.add('dark'); }, []);
  return <ThemeContext.Provider value={VALUE}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
