
const person = (props) => {
    return (
        <div>
            <h4>My name is {props.name}</h4>
            <p>I'm {props.age} years old</p>
            <p>My job title is: {props.job}</p>
            <p>Experience: {props.experience}</p>
            <p>{props.children}</p>
        </div>
        
        
    )
}

export default person;