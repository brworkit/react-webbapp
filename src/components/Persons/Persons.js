import React, { Component } from 'react'

import Person from "./Person/Person";

class Persons extends Component {

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
        return { message: "PERSONS SNAPSHOT" };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log({ snapshot })
    }

    render() {
        return (
            this.props.people.map((item, index) => {
                return <Person
                    key={item.id}
                    name={item.name}
                    age={item.age}
                    job={item.job}
                    experience={item.experience}
                    update={event => this.props.update(event, item.id)}
                    delete={() => this.props.delete(index)}>
                    {item?.hobby}
                </Person>
            }
            )
        )
    }
}

export default Persons;