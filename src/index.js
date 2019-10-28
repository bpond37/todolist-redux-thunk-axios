import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// import rootReducer from './reducers';
// import todoReducer from './reducers/todoReducer';
// import {composeWithDevTools} from 'redux-devtools-extension'
import store from './configureStore';

// const store = createStore(todoReducer, composeWithDevTools)

ReactDOM.render(
    <Provider store = {store}>
      <App /> 
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
