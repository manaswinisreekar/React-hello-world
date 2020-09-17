import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import {welcome} from './components/welcome';

function App() {
  return (
    <div className="App">
      <Greet />
      <welcome/>
        </div>
  );
}


export default App;
