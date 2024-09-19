import { useState } from "react";

function Welcome(props) {
    let [counter, setCounter] = useState(0);

    console.log(props);
    return (
        <>
        <h1>Hello , {props.name}</h1>
        <h5> {counter}</h5>
        <button
                onClick = {() =>{
                    setCounter(counter++);
                }}
            > counting
            </button>
        </>
    )
}

export default Welcome;