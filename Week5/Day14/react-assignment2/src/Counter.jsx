import {useState} from 'react'

function Counter(){
    const [count,setCount]=useState(0);

    const increment =()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    };   
    return (
        <div className="text-center p-10 border">
            <h1>Count:{count}</h1>
            <button onClick={increment} className="m-10 p-10 bg-red-300">+</button>
            <button onClick={decrement} className="m-10 p-10 bg-blue-300">-</button>
        </div>
    )
}
export default Counter;