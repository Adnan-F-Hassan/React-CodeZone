import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';


function App() {

    return (
      <div className="App">
          <Navbar />
          <ProductsList />
      </div>
    )
}

export default App;
