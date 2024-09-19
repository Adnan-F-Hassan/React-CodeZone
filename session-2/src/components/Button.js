function Button(props) {

    const btnHandler = () => {
        console.log("Hello");    
    }
    const mouseLeaveHandler = () => {
        console.log("mouseLeaveHandler");    
    }
    return (
        <button className="react-btn" onMouseEnter={btnHandler} onMouseLeave={mouseLeaveHandler}>
            {props.title}
        </button>
    )
    

}

export default Button;