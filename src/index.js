import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiUserSlice } from './reducers/apiUserSlice';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  {/* <Provider store={store}> */}
  <ApiProvider api={apiUserSlice}>
     <App />
  </ApiProvider>
    
{/*   </Provider> */}
     
   
    
  </BrowserRouter>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
