import React from "react";
import Restraunts from "./components/Restraunts";
import { Route, Routes } from "react-router"; 
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <React.StrictMode>
    <div className="App">
      <Routes>
      
      <Route path="/" element={<Restraunts />} />
        
      
     
        
      
      </Routes>
     
      {/* <Header /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </React.StrictMode>
    </Router>
  );
}

export default App;
