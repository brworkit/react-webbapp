import Person from "./Person/Person";

const persons = props => props.people.map((item, index) => {
    return <Person
        key={item.id}
        name={item.name}
        age={item.age}
        job={item.job}
        experience={item.experience}
        changed={(event) => props.updatePersonName(event, item.id)}
        onDelete={() => props.deletePerson(index)}>
        {item?.hobby}
    </Person>
})

export default persons;