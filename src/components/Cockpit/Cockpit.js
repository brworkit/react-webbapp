import DefaultButton from '../DefaultButton/DefaultButton'

const cockpit = props => {
    return (
        // {listPeople()}      
        <DefaultButton onClick={props.toggleShowList}>Show List</DefaultButton>
    )
}


export default cockpit;