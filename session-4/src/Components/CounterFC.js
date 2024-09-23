import { useState } from "react";


function CounterFc() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter +1)} > + </button>
            <h1> Counter: {counter} </h1>
        </>    
    )
}

export default CounterFc;