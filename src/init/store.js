// Core
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

// Instruments
import { rootReducer } from './rootReducer';
import { customThunk, notifications } from './middleware';
import { rootSaga } from './rootSaga';

const dev = process.env.NODE_ENV === 'development';
const devtools  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = dev && devtools ? devtools : compose;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const myLogger = (store) => {
    return (next) => {
        return (action) => {
            console.log('Action.type: ', action.type, ';', 'State before: ', store.getState());
            next(action);
            console.log('State after: ', store.getState());
        };
    };
};

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

window.x = history;

const middleware = [
    customThunk,
    sagaMiddleware, 
    routerMiddleware
];

if (dev) {
    middleware.push.apply(middleware, [logger, notifications]);
}

export { history };

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);