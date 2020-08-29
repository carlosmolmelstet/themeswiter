import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistetState from './utils/usePersistedState';


import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistetState<DefaultTheme>('theme', light);


  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
