import logo from './logo.svg';
import './App.css'
import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import { Groceries } from './components/Groceries';

function App() {
const [data,setData] = useState("")
const get = ()=>{
  setData(localStorage.getItem("groc"))
}
  return (
    <div className="App">
      <h1>Groceries App</h1>
    <Groceries/>
   <h1>{data}</h1>
    </div>
  );
}

export default App;
