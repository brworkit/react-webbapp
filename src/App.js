import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person 
          name="Bruno"
          age="30"
          job="developer"
          experience="I'm a software developer who has developed many applications in many languages." 
         />
         
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
