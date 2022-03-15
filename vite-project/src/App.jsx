import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Addform} from "./components/Addform"
import {Showform} from "./components/Showfrom"
function App() {
 

  return (
    <div className="App">
     <Addform/>
     <Showform/>
    </div>
  )
}

export default App
