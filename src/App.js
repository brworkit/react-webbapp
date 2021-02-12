import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person'
import { useState } from 'react';

const App = props => {
  const [personState, setPersonState] = useState({
    people: [
      {name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer."},
      {name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother."},
      {name: "Bruna", age: "06", job: "Student", experience: "I'm a student."},
      {name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby."}
    ]
  })
  
  const buttonHandler = () => {
    console.log("buttonHandler");

    setPersonState({
      people: [
        {name: "Bruno Viana", age: "30", job: "Developer", experience: "I'm a software developer."},
        {name: "Natalia Santos", age: "26", job: "Mother", experience: "I'm a mother."},
        {name: "Bruna Santos Viana", age: "06", job: "Student", experience: "I'm a student."},
        {name: "Eduardo Santos Viana", age: "04", job: "Baby", experience: "I'm a baby."}
      ] 
    })
  }
  
  return (
    <div className="App">                    
        <Person 
          name={personState.people[0].name}
          age={personState.people[0].age}
          job={personState.people[0].job}
          experience={personState.people[0].experience}
         >Hobby: Play Soccer
         </Person>            

         <button onClick={buttonHandler}>Change</button>    
    </div>
  );
  
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import Person from './components/Person/Person'
// import { Component } from 'react';

// class App extends Component {
//   state = {
//     people: [
//       {name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer."},
//       {name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother."},
//       {name: "Bruna", age: "06", job: "Student", experience: "I'm a student."},
//       {name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby."}
//     ]
//   }


//   buttonHandler = () => {
//     console.log("buttonHandler");

//     this.setState({
//       people: [
//         {name: "Bruno Viana", age: "30", job: "Developer", experience: "I'm a software developer."},
//         {name: "Natalia Santos", age: "26", job: "Mother", experience: "I'm a mother."},
//         {name: "Bruna Santos Viana", age: "06", job: "Student", experience: "I'm a student."},
//         {name: "Eduardo Santos Viana", age: "04", job: "Baby", experience: "I'm a baby."}
//       ] 
//     })
//   }

//   render () {

//     return (
//       <div className="App">                    
//           <Person 
//             name={this.state.people[0].name}
//             age={this.state.people[0].age}
//             job={this.state.people[0].job}
//             experience={this.state.people[0].experience}
//            >Hobby: Play Soccer
//            </Person>            

//            <button onClick={this.buttonHandler}>Change</button>    
//       </div>
//     );

//   }
  
// }

// export default App;




