import { ref, watch } from 'vue';

export type ThemeMode = 'sky-blue' | 'powder-green';

export interface ThemeConfig {
  name: ThemeMode;
  primary: string;
  label: string;
}

const THEMES: Record<ThemeMode, ThemeConfig> = {
  'sky-blue': {
    name: 'sky-blue',
    primary: '#7BBFC3',
    label: '天青',
  },
  'powder-green': {
    name: 'powder-green',
    primary: '#90B44B',
    label: '粉青',
  },
};

const currentTheme = ref<ThemeMode>('sky-blue');

export function useTheme() {
  const setTheme = (theme: ThemeMode) => {
    currentTheme.value = theme;
    document.documentElement.style.setProperty('--vs-primary', THEMES[theme].primary);
    localStorage.setItem('vuesax-theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'sky-blue' ? 'powder-green' : 'sky-blue';
    setTheme(newTheme);
  };

  const initTheme = () => {
    const saved = localStorage.getItem('vuesax-theme') as ThemeMode | null;
    const theme = saved || 'sky-blue';
    setTheme(theme);
  };

  watch(currentTheme, (theme) => {
    document.documentElement.style.setProperty('--vs-primary', THEMES[theme].primary);
  });

  return {
    currentTheme,
    setTheme,
    toggleTheme,
    initTheme,
    themes: THEMES,
  };
}
