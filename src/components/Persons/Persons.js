import Person from "./Person/Person";

const persons = props => props.people.map((item, index) => {
    return <Person
        key={item.id}
        name={item.name}
        age={item.age}
        job={item.job}
        experience={item.experience}
        update={(event) => props.update(event, item.id)}
        delete={() => props.delete(index)}>
        {item?.hobby}
    </Person>
})

export default persons;