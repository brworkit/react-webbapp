
const defaultButton = props => {

    return (
        <button onClick={props.onClick} value={props.text}>
            {props.children}
        </button>
    )
    
}

export default defaultButton