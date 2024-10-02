import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useRecoilState } from "recoil";
import productsState from "../atoms/products-atom";


function Navbar(props) {
  
  // const value = useContext(ProductsContext)
  const [products,setProducts] = useRecoilState(productsState)
  
  return (
    <div className="navbar">
      <h1> Products Count : {products.length} </h1>
    </div>
  );
}

export default Navbar;