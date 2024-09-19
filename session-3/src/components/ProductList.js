import productsData from "../products-data";

function ProductsList() {

    const products = productsData.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.img} alt = "" />
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>
        )
    })

    return 
        <div className = "products-List">
            {products}
        </div>;
}

export default ProductsList;