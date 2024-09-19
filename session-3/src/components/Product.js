import "./Product.css"

function Product(props) {
    return (
        <div className="card" >
            <img src={props.product.image} alt = "" />
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p>Price: {props.product.price}</p>
            <button onClick = {() => {
                console.log('but it!', props.product.price);
            }}> BUY </button>
        </div>
    )
}

export default Product;

