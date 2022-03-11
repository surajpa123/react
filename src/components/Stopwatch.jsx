import { useState } from "react"
import React from "react"
import {useEffect} from "react"
export const Stopwatch = () =>{
   const [time,setTime] = React.useState(0)
   const [isrunning,setIsrunning] = React.useState(false)
   const [isstatus,setStatus] = React.useState(false)
   const timeref = React.useRef 
    React.useEffect(()=>{
        if(isstatus){
            handelstart();
        }
        return handelstop;
        setStatus(true)
       },[])
  
   
   const handelstart = () =>{
       if(isrunning){
           return;
       }
    timeref.current = setInterval(()=>{
        setTime((prev) => prev + 1)
    },1000) 
    setIsrunning(true)
   }
   const handelstop = () => {
       clearInterval(timeref.current)
       setIsrunning(false)
   }
    return (
        <>
        <h1>Stopwatch</h1>
        <h1>{time}</h1>
        <button onClick={handelstart} >Start</button>
        <button onClick={handelstop}>Stop</button>
        </>
    )

}