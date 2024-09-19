// import './App.css';
import { useState } from "react";
// import Welcome from './components/Welcome';
// import Guest from './components/Guest';
// import List from './components/List';
import ProductsList from './components/ProductList';
function App() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // let element = isLoggedIn ? <h1>Logged In ^_^ </h1> : <h2>not logged in yet!</h2>;
  return (
    <div className="App">
    {/* <button onClick={() => setIsLoggedIn(true)}> Login </button> */}
    {/* {element} */}
    {/* {isLoggedIn ? <h1>Logged In ^_^ </h1> : <h2>not logged in yet!</h2>} */}
    {/* {isLoggedIn ? <Welcome name="Eden" /> :  <Guest />} */}
    {/* {<List />} */}
    
    
    {<ProductsList />}
    
    </div>
  );
}

export default App;
