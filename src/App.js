import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./component/Counter";
import Todos from "./component/Todos";
import CounterContainer from "./container/CounterContainer";

function App() {
  return (
      <div>
        <CounterContainer/>
        <hr/>
        <Todos />
      </div>
  );
}

export default App;
