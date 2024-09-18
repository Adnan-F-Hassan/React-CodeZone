// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Welcome from "./components/Welcome";
import WelcomeRender from './components/WelcomeRender';


function App() {
  return (
    <div className="App">
    <Welcome name="Eden" age="27" title ="js dev" />
    <WelcomeRender name="Edeno" />
    <Button title="react-btn"/>
    </div>
  );
}

export default App;
