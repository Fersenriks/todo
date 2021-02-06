import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Todo} from './Todo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
