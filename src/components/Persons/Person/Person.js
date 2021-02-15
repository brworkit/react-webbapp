
import './Person.css'

// import DeleteIcon from '@material-ui/icons/Delete';

const person = (props) => {
    return (
        <div className="Person">
            <h4>My name is {props.name}</h4>
            <p>I'm {props.age} years old</p>
            <p>My job title is: {props.job}</p>
            <p>Experience: {props.experience}</p>
            <div>{props.children}</div>
            <input type="text" onChange={props.update}></input>
            <button onClick={props.delete}>Delete</button>            
        </div>        
    )
}

export default person;