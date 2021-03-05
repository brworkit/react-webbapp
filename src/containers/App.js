import React, { Component } from 'react';

import './App.css';

import Persons from '../components/Persons/Persons'

import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import Spinner from '../components/UI/Spinner/Spinner'

import axios from '../api';

import Cockpit from '../components/Cockpit/Cockpit'

import AuthContext from "../context/auth-context"

class App extends Component {

  constructor(props) {
    super(props)
    console.log("constructor")
  }

  state = {
    people: [
      { id: 1, name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer." },
      { id: 2, name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother." },
      { id: 3, name: "Bruna", age: "06", job: "Student", experience: "I'm a student." },
      { id: 4, name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby." },
      { id: 5, name: "Fulano", age: "00", job: "Unknown", experience: "I'm a unknown situation.", hobby: "But I have a hobby." }
    ],
    showListState: false,
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: '',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }


  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps")
    console.log({ props })
    return state
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  componentDidMount() {
    console.log("componentDidMount")

  }

  componentDidCatch() {
    console.log("componentDidCatch")

  }

  componentDidUpdate() {
    console.log("componentDidUpdate")

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate")
    return null
  }

  deletePerson = (index) => {
    console.log("deletePerson");
    const people = [...this.state.people]
    people.splice(index, 1)

    this.setState({
      people: people
    })
  }

  updatePersonName = (event, id) => {
    console.log("updatePersonName");
    const personIndex = this.state.people.findIndex(item => item.id === id)
    console.log({ personIndex })
    const person = { ...this.state.people[personIndex] }
    person.name = event.target.value
    const people = [...this.state.people]
    people[personIndex] = person

    this.setState({
      people: people
    })

  }

  toggleShowList = () => {
    console.log("toggleShowList");
    const doesShow = this.state.showListState
    this.setState({
      showListState: !doesShow
    })
  }

  listPeople = () => {
    if (this.state.showListState) {
      return (
        <div>
          <Persons
            people={this.state.people}
            update={this.updatePersonName}
            delete={this.deletePerson}
          />
        </div>
      )
    }
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="App">

        {form}
        {/* <Input>
        </Input> */}
        {/* <Cockpit toggleShowList={this.toggleShowList} />
        {this.listPeople()} */}

      </div>
    );
  }

}

export default App;

