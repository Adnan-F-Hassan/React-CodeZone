// import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Eden Farid"
  const element = <h2>hi, {name}</h2>

  return (
    <div className='App'>
      <h1> Hello World</h1>
      {element}
      {/* <h2>"Eden"</h2> */}
      </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
