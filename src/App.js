import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = React.useState(0)
  const handelincrement = (value) => {
   setCounter(counter + value);
   console.log(counter)
  }
  const handeldec = (value) =>{
    if(counter <= 0){
      return
    // setCounter(1 + value)
    }else{
      setCounter(counter + value)
    }
  }
  const double = (value)=>{
    if(counter == 0){
      setCounter(1 * value)
    }else{

      setCounter(counter * value)
    }
  }
  return (
   <div className='App'>
  <h1>Counter App</h1>
  <h2>{counter}</h2>
  <button onClick={() =>handelincrement(1)}>Increment</button>
  <button onClick= {() =>handeldec(-1)} >Decrement</button>
  <button onClick={() => double(2)}>Double</button>
   </div>
  );
}
export default App;

// const data = [

// ]

// data.map((user)=>{
//   return <usercomp name={user.name} age={user.age}/>
// })