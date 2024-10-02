import { useContext } from "react";
import { ProductsContext } from "../App";

function Navbar(props) {
  
  const value = useContext(ProductsContext)
  
  return (
    <div className="navbar">
      <h1> Products Count : {value.length} </h1>
    </div>
  );
}

export default Navbar;