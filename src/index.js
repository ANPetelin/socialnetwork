import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import './index.scss';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas/sagaWatcher';

const saga = createSagaMiddleware();

const sagaMiddleware = applyMiddleware(saga);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? compose( sagaMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  : sagaMiddleware);

saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
