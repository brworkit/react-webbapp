
import React, { Component } from 'react'

import './Person.css'

class Person extends Component {

    componentDidMount() {
        console.log("componentDidMount")

    }

    componentDidCatch() {
        console.log("componentDidCatch")

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return { message: "PERSON SNAPSHOT" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log({ snapshot })
    }

    render() {
        return (
            <div className="Person">
                <h4>My name is {this.props.name}</h4>
                <p>I'm {this.props.age} years old</p>
                <p>My job title is: {this.props.job}</p>
                <p>Experience: {this.props.experience}</p>
                <div>{this.props.children}</div>
                <input type="text" onChange={this.props.update}></input>
                <button onClick={this.props.delete}>Delete</button>
            </div>
        )
    }
}

export default Person;