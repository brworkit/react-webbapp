
import './Person.css'

// import DeleteIcon from '@material-ui/icons/Delete';

const person = (props) => {
    return (
        <div className="Person">
            <h4>My name is {props.name}</h4>
            <p>I'm {props.age} years old</p>
            <p>My job title is: {props.job}</p>
            <p>Experience: {props.experience}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
            <button onClick={props.onDelete}>Delete</button>            
        </div>        
    )
}

export default person;