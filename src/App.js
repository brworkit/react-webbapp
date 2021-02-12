import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person'
import { Component } from 'react';

class App extends Component {
  state = {
    people: [
      {name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer."},
      {name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother."},
      {name: "Bruna", age: "06", job: "Student", experience: "I'm a student."},
      {name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby."}
    ]
  }


  buttonHandler = () => {
    console.log("buttonHandler");

    this.setState({
      people: [
        {name: "Bruno Viana", age: "30", job: "Developer", experience: "I'm a software developer."},
        {name: "Natalia Santos", age: "26", job: "Mother", experience: "I'm a mother."},
        {name: "Bruna Santos Viana", age: "06", job: "Student", experience: "I'm a student."},
        {name: "Eduardo Santos Viana", age: "04", job: "Baby", experience: "I'm a baby."}
      ] 
    })
  }

  render () {

    return (
      <div className="App">                    
          <Person 
            name={this.state.people[0].name}
            age={this.state.people[0].age}
            job={this.state.people[0].job}
            experience={this.state.people[0].experience}
           >Hobby: Play Soccer
           </Person>            

           <button onClick={this.buttonHandler}>Change</button>    
      </div>
    );

  }
  
}

export default App;





// import logo from './logo.svg';
// import './App.css';
// import Person from './components/Person/Person'
// import { Component } from 'react';

// class App extends Component {
  
//   render () {

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />

//           <button>Change</button>      

//           <Person 
//             name="Bruno"
//             age="30"
//             job="developer"
//             experience="I'm a software developer who has developed many applications in many languages." 
//            >
//             Hobby: Play Soccer
//            </Person>
  
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>            
//       </div>
//     );

//   }
  
// }

// export default App;
