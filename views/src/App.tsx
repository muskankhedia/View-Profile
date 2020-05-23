import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Base from './components/Base';

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: ['Lato', 'Raleway'].join(','),
    fontSize: 12
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Base />
    </ThemeProvider>
  );
}

export default App;
