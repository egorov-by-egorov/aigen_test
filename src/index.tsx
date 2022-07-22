import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './store/store';
import theme from './theme';

const root = ReactDOM.createRoot(
    document.getElementById( 'root' ) as HTMLElement
);

root.render(
    // StrictMode - убран так как имеется баг с двойным рендером! пока Meta не пофиксила это.
    //<React.StrictMode>
    <Provider store={ store }>
        <ThemeProvider theme={ theme }>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Provider>
    //</React.StrictMode>
);