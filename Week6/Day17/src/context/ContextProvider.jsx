import { useState } from "react";
import { CounterContext } from "./CounterContext";

function ContextProvider({ children }) 
{
  const [counter,setCounter]=useState(0)
    const IncreaseCounter =()=>{
        setCounter(counter+1)
    }
    const DecreaseCounter =()=>{
        setCounter(counter-1)
    }
  
  return (
    <CounterContext.Provider value={{ counter, IncreaseCounter,DecreaseCounter}}>
      {children}
    </CounterContext.Provider>
  );
}

export default ContextProvider;

