import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById( 'root' ) as HTMLElement
);

root.render(
    // StrictMode - убран так как имеется баг с двойным рендером! пока Meta не пофиксила это.
    //<React.StrictMode>
    <App/>
    //</React.StrictMode>
);