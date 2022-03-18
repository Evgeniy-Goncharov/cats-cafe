import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/app/app';
import defaultTheme from './theme/default';

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root'));
