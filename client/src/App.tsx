
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Wrap from './componnents/wrap';
import './App.css';

export default function App() {
 
  return (
    <div>
      <Provider store={store}>
        <Wrap/>       
      </Provider>
    </div>
  );
}

