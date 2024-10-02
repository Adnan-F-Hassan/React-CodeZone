import { useContext } from "react";
import { ProductsContext } from "../App";

function ProductsList() {
  
  const products = useContext(ProductsContext)
  
  return (
    <div className="products-list">
      {products.map((product) => <h1 key={product.id}>{product.title}</h1>)} 
    </div>
  );
}

export default ProductsList;