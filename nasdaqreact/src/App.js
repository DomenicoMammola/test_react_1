import logo from './logo.svg';
import './App.css';
import Figlio from './Figlio';
import Fratello2 from './Fratello2';
import Fratello3 from './Fratello3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Figlio></Figlio>
        <Fratello2></Fratello2>
        <Fratello3></Fratello3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
