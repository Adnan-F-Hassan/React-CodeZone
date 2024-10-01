import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path = "/" element = {<Home />} />
            {/* <Route path = "about" element = {<About />} /> */}
            <Route path = "products" element = {<Products />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
