import { useState } from 'react';

import logo from './logo.svg';

import './App.css';

import Person from './components/Person/Person'
import DefaultButton from './components/DefaultButton/DefaultButton'


const App = props => {

  const [showListState, setShowListState] = useState(false)

  const [peopleListState, setPeopleListState] = useState({
    people: [
      { id: 1, name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer." },
      { id: 2, name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother." },
      { id: 3, name: "Bruna", age: "06", job: "Student", experience: "I'm a student." },
      { id: 4, name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby." },
      { id: 5, name: "Fulano", age: "00", job: "Unknown", experience: "I'm a unknown situation.", hobby: "But I have a hobby." }
    ]
  })

  const deletePerson = (index) => {
    console.log("deletePerson");
    const people = [...peopleListState.people]
    people.splice(index, 1)
    setPeopleListState({ people: people })
  }

  const updatePersonName = (event, id) => {
    console.log("updatePersonName");
    const personIndex = peopleListState.people.findIndex(item => item.id === id)
    console.log({personIndex})
    const person = {...peopleListState.people[personIndex]}
    person.name = event.target.value
    const people = [...peopleListState.people]
    people[personIndex] = person
    setPeopleListState({people: people})    
  }

  const toggleShowList = () => {
    console.log("toggleShowList");
    const doesShow = showListState
    setShowListState(!doesShow)
  }

  const listPeople = () => {

    if (showListState) {
      return (
        <div>
          {peopleListState.people.map((item, index) => {
            return <Person
              key={item.id}
              name={item.name}
              age={item.age}
              job={item.job}
              experience={item.experience}
              changed={(event) => updatePersonName(event, item.id)}
              onDelete={() => deletePerson(index)}>
              {item?.hobby}
            </Person>
          })}
        </div>
      )
    }
  }

  return (
    <div className="App">

      {listPeople()}

      <DefaultButton onClick={() => deletePerson(0)}>Change</DefaultButton>

      <DefaultButton onClick={() => toggleShowList()}>Show List</DefaultButton>

    </div>
  );

}

export default App;





















// import { useState } from 'react';

// import logo from './logo.svg';

// import './App.css';

// import Person from './components/Person/Person'
// import DefaultButton from './components/DefaultButton/DefaultButton'


// const App = props => {

//   const [personState, setPersonState] = useState({
//     people: [
//       {name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer."},
//       {name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother."},
//       {name: "Bruna", age: "06", job: "Student", experience: "I'm a student."},
//       {name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby."},
//       {name: "Fulano", age: "00", job: "Unknown", experience: "I'm a unknown situation."}
//     ],
//     donwload: false
//   })

//   const buttonHandler = (newFakeName) => {
//     console.log("buttonHandler");

//     setPersonState({
//       people: [
//         {name: "Bruno Viana", age: "30", job: "Developer", experience: "I'm a software developer."},
//         {name: "Natalia Santos", age: "26", job: "Mother", experience: "I'm a mother."},
//         {name: "Bruna Santos Viana", age: "06", job: "Student", experience: "I'm a student."},
//         {name: "Eduardo Santos Viana", age: "04", job: "Baby", experience: "I'm a baby."},
//         {name: newFakeName, age: "00", job: "Unknown", experience: "I'm a unknown situation."}
//       ] 
//     })
//   }

//   const updatePersonName = (event) => {
//     console.log("updatePersonName");

//     setPersonState({
//       people: [
//         {name: "Bruno Viana", age: "30", job: "Developer", experience: "I'm a software developer."},
//         {name: "Natalia Santos", age: "26", job: "Mother", experience: "I'm a mother."},
//         {name: "Bruna Santos Viana", age: "06", job: "Student", experience: "I'm a student."},
//         {name: "Eduardo Santos Viana", age: "04", job: "Baby", experience: "I'm a baby."},
//         {name: event.target.value, age: "00", job: "Unknown", experience: "I'm a unknown situation."}
//       ] 
//     })
//   }


//   return (
//     <div className="App">                    
//         <Person 
//           name={personState.people[0].name}
//           age={personState.people[0].age}
//           job={personState.people[0].job}
//           experience={personState.people[0].experience}
//          >Hobby: Play Soccer
//          </Person>

//          <Person 
//           name={personState.people[4].name}
//           age={personState.people[4].age}
//           job={personState.people[4].job}
//           experience={personState.people[4].experience}
//           changed={updatePersonName}
//          >Hobby: Unknown
//          </Person>            

//         <DefaultButton onClick={() => buttonHandler("FakeName")}>Change</DefaultButton>

//     </div>
//   );

// }

// export default App;






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




