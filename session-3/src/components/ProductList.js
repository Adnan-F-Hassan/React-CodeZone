import productsData from "../products-data";
import Product from "./Product";

function ProductsList() {

    const products = productsData.map((product) => {
        return product.price < 100 && <Product key={product.id} product= {product}   />;
        
    });

    return  <div className = "products-List">
            {products}
        </div>;
}

export default ProductsList;