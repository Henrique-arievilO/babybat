import React, { useState } from 'react';
import Routes from './services/routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Global/GlobalStyle'
import { lightTheme, darkTheme } from './Global/Theme';
import * as S from './Global/GlobalStyle'

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <S.Toggler onClick={() => themeToggler()}>
        <S.SwitchToggle type='checkbox' />
      </S.Toggler>
      <Routes />
    </ThemeProvider>
  );
}