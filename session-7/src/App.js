import logo from './logo.svg';
import './App.css';

import { createContext, useState } from "react";
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';

export const ProductsContext = createContext() //   () by default undefined ... (null)

function App() {

  const [products, setProduct] = useState([
    {id: 1, title: "prod 1" },
    {id: 2, title: "prod 2" },
    {id: 3, title: "prod 3" }
  ]);



    return (
      <div className="App">
        <ProductsContext.Provider value={products}>
          <Navbar />
          <ProductsList products={products} />
        </ProductsContext.Provider>
      </div>
    )
}

export default App;
