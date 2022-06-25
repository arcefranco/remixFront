import { Routes, Route } from 'react-router-dom';
import Login from './components/LogIn/Login';
import Home from './components/Home/Home';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login'  element={<Login/>}  ></Route>
        </Routes>
      
    </React.StrictMode>
     
      

  );
}

export default App;
