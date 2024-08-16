// import React, { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem('theme') || 'light'
//   );

//   useEffect(() => {
//     document.body.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;

    // Check system preference for dark mode
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';  // Default to dark mode if system preference is dark
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
