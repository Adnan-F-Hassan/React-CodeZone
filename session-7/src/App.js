import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';


function App() {

  const [products, setProduct] = useState([
    {id: 1, title: "prod 1" },
    {id: 2, title: "prod 2" },
    {id: 3, title: "prod 3" }
  ]);



  return <div className="App">
      
    <Navbar count={products.length} />
    <ProductsList products={products} />

    </div>
}

export default App;
