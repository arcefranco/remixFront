import { Routes, Route } from "react-router-dom";
import Login from "./components/LogIn/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <h1>deploy prueba</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
