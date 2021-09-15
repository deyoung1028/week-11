import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
