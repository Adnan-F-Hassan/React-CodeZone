// import productsData from "../products-data.js";
import { useState , useEffect} from "react";
import Product from "./Product.js";
import "./ProductsList.css";

function ProductsList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        
    } , [])


    const productsData = products.map((product) => {
        return product.price < 100 && (
        <Product key={product.id} product= {product}   /> 
        );
        
    });

    return  (
    <div className = "products-List">
    <div className = "row"> 
            {ProductsData}
        </div>  
        </div>
)}

export default ProductsList;