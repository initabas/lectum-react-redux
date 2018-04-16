// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import './theme/reset.css';
import store, { history } from './init/store';

// Main
import Routes from './routes/Main';

// window.x = store;

render(
    <Provider store = { store }>
        <Router history = { history }>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('root')
);
    
