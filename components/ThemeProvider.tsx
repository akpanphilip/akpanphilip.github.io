'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Ctx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    const initial = (document.documentElement.classList.contains('dark') ? 'dark' : 'light') as Theme;
    setThemeState(initial);
  }, []);

  const apply = useCallback((next: Theme) => {
    const root = document.documentElement;
    root.classList.toggle('dark', next === 'dark');
    try { localStorage.setItem('theme', next); } catch {}
    root.style.colorScheme = next;
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => apply(theme === 'dark' ? 'light' : 'dark'), [theme, apply]);

  return (
    <ThemeCtx.Provider value={{ theme, toggle, setTheme: apply }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

/* Inline script injected in <head> to apply the theme before paint and avoid flash */
export const themeInitScript = `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`;
