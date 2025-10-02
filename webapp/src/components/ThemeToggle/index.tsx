import { useState, useEffect } from 'react';
import css from './index.module.scss';
import { Icon } from '../Icon';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDark(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (dark: boolean) => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    applyTheme(newDark);
  };

  return (
    <button 
      className={css.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={css.slider}>
        <div className={`${css.thumb} ${isDark ? css.dark : css.light}`}>
          <Icon name={isDark ? 'moon' : 'sun'} size={13}/>
        </div>
      </div>
    </button>
  );
};