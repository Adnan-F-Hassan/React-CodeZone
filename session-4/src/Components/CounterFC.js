import { useState , useEffect} from "react";


function CounterFc() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${counter} times`; 
    }, []) // el array fel a5er da dependency list,. means that el 7aga elly bte3tmed 3leeha el useEffect 34an t-rerender  

    return (
        <>
            <button onClick={() => setCounter(counter +1)} > + </button>
            <h1> Counter: {counter} </h1>
        </>    
    )
}

export default CounterFc;