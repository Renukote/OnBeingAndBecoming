import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/home";

function App() {
  return <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>  
      </Routes>
  </>;
}

export default App;
