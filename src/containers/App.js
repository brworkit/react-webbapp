import { useState } from 'react';

import './App.css';

import Persons from '../components/Persons/Persons'
import DefaultButton from '../components/DefaultButton/DefaultButton'

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
          <Persons 
            people={peopleListState.people}
            update={updatePersonName}
            delete={deletePerson}
           />             
        </div>
      )
    }
  }

  return (
    <div className="App">

      {listPeople()}
      
      <DefaultButton onClick={toggleShowList}>Show List</DefaultButton>

    </div>
  );

}

export default App;

// import { useState } from 'react';

// import './App.css';

// import Persons from '../components/Persons/Persons'
// import DefaultButton from '../components/DefaultButton/DefaultButton'

// import Square from "../components/Geometry/Square/Square"
// import Rectangle from "../components/Geometry/Rectangle/Rectangle"
// import Circle from "../components/Geometry/Circle/Circle"


// import { Container, Row, Col } from 'react-grid-system';


// const App = props => {

//   const [showListState, setShowListState] = useState(false)

//   const [peopleListState, setPeopleListState] = useState({
//     people: [
//       { id: 1, name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer." },
//       { id: 2, name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother." },
//       { id: 3, name: "Bruna", age: "06", job: "Student", experience: "I'm a student." },
//       { id: 4, name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby." },
//       { id: 5, name: "Fulano", age: "00", job: "Unknown", experience: "I'm a unknown situation.", hobby: "But I have a hobby." }
//     ]
//   })

//   const deletePerson = (index) => {
//     console.log("deletePerson");
//     const people = [...peopleListState.people]
//     people.splice(index, 1)
//     setPeopleListState({ people: people })
//   }

//   const updatePersonName = (event, id) => {
//     console.log("updatePersonName");
//     const personIndex = peopleListState.people.findIndex(item => item.id === id)
//     console.log({personIndex})
//     const person = {...peopleListState.people[personIndex]}
//     person.name = event.target.value
//     const people = [...peopleListState.people]
//     people[personIndex] = person
//     setPeopleListState({people: people})    
//   }

//   const toggleShowList = () => {
//     console.log("toggleShowList");
//     const doesShow = showListState
//     setShowListState(!doesShow)
//   }

//   const listPeople = () => {

//     if (showListState) {
//       return (
//         <div>
//           <Persons 
//             people={peopleListState.people}
//             changed={updatePersonName}
//             onDelete={deletePerson}
//            />             
//         </div>
//       )
//     }
//   }

//   return (
//     <div className="App">


//       {/* <div style={{flex: 1, flexDirection: 'column'}}>
//         <div style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <div style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <div style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </div> */}

//       {/* {listPeople()}

//       <DefaultButton onClick={() => deletePerson(0)}>Change</DefaultButton>

//       <DefaultButton onClick={() => toggleShowList()}>Show List</DefaultButton> */}

//       <Rectangle backgroundColor="brown" width="100%" height="200px">                  
//           <Square backgroundColor="yellow" side="50px" left="10px" top="10%" float="left">            
//           </Square>
//           <Circle backgroundColor="orange" side="100px" left="50%" top="15%">              
//           </Circle>          
//       </Rectangle>

//       <Rectangle backgroundColor="gray" width="100%" height="500px">        
//           {/* <Grid backgroundColor="yellow" side="200px" left="47%" top="20%">            

//           </Grid> */}

//           {/* <Grid container spacing={1}>
//             <Grid container item xs={12} spacing={3}>
//               <FormRow />
//             </Grid>
//             <Grid container item xs={12} spacing={3}>
//               <FormRow />
//             </Grid>
//             <Grid container item xs={12} spacing={3}>
//               <FormRow />
//             </Grid>
//           </Grid> */}

//           <Container>
//             <Row>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//             </Row>

//             <Row>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//             </Row>

//             <Row>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//               <Col sm={4}>
//                 One of three columns
//               </Col>
//             </Row>
//           </Container>

//       </Rectangle>

//       <Rectangle backgroundColor="cyan" width="100%" height="200px">        
          
//       </Rectangle>

//       <Circle backgroundColor="yellow" side="75px" right="20px" bottom="10%" float="right" position="absolute">                  
//       </Circle>

//       {/* <Square backgroundColor="brown" left="200px" side="400px"/>

//       <Square backgroundColor="orange" /> */}

//     </div>
//   );

// }

// export default App;





















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




