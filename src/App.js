import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./components/home";
import NasaPhoto from "./components/NasaPhoto"

function App() {
  return (
   <Router>
   <div className="app">
     <Route component={Home} path="/" exact />
     <Route component={NasaPhoto} path="/NasaPhoto"/>
   </div>
   </Router>
  );
}

export default App;
