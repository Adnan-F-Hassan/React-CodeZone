import { createContext, useState } from "react";

export const ProductsContext = createContext() //   () by default undefined ... (null)

function ProductsProvider(props) {
    
    const [products, setProduct] = useState([
        {id: 1, title: "prod 1" },
        {id: 2, title: "prod 2" },
        {id: 3, title: "prod 3" }
      ]);
    
      return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>

      )
}

export default ProductsProvider;
