import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Card from './Card';
import 'tachyons';
// import {robots} from './robots';
// import CardList from './CardList';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  // <CardList robots={robots}/>
  <App/>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
