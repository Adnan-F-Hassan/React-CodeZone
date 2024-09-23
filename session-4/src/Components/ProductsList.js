// import productsData from "../products-data.js";
import Product from "./Product.js";
import "./ProductsList.css";

function ProductsList() {

    const products = [].map((product) => {
        return product.price < 100 && <Product key={product.id} product= {product}   />;
        
    });

    return  <div className = "products-List">
            {products}
        </div>;
}

export default ProductsList;