import './App.css';
import { useState } from "react";
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element = isLoggedIn ? <h1>Logged In ^_^ </h1> : <h2>not logged in yet!</h2>;
  return (
    <div className="App">
    <button onClick={() => setIsLoggedIn(true)}> Login </button>
    {element}
    
    
    
    
    
    
    </div>
  );
}

export default App;
