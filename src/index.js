import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './pages/App';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import BaseLayout from './components/BaseLayout';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseLayout>
        <App />
      </BaseLayout>
    </Provider>

=======
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import reducer from './store/reducer';
import {Provider} from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
>>>>>>> 083dd22f3b1b28981be90b8c0d155333372d44b5
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
