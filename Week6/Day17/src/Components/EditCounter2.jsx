import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


function EditCounter2() {
    const {counter,IncreaseCounter,DecreaseCounter} =useContext(CounterContext)
    
     
      return (
         <div className="border-2 shadow-2xl bg-pink-200 text-center">
      <h1 className="text-center">EditCounter4</h1>
      <h1>{counter}</h1>
      <div className="flex justify-center items-center gap-8 py-2">
        <button onClick={IncreaseCounter} className="p-2 bg-amber-300 w-12">+</button>
        <button onClick={DecreaseCounter} className="p-2 bg-amber-300 w-12">-</button>
      </div>
    </div>   
      )
    }
  

export default EditCounter2