// import productsData from "../products-data.js";
import { useState , useEffect} from "react";
import Product from "./Product.js";
import "./ProductsList.css";

function ProductsList() {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((response) => response.json()).then((data) => console.log(data))
        
    })


    // const products = [].map((product) => {
    //     return product.price < 100 && <Product key={product.id} product= {product}   />;
        
    // });

    return  <div className = "products-List">
            {/* {Product} */}
        </div>;
}

export default ProductsList;