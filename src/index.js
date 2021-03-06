import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const airlineList = (state = [], action) => {
  if (action.type === 'ADD_AIRLINE_TO_LIST') {
    console.log('added airline to list', action);
    return [...state, action.payload];
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    airlineList,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
