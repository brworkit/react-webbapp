
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h4>My name is {props.name}</h4>
            <p>I'm {props.age} years old</p>
            <p>My job title is: {props.job}</p>
            <p>Experience: {props.experience}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
        
        
    )
}

export default person;