import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    tyran:'#ff6257',
    brand: {
      900: "#ff6257",
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
