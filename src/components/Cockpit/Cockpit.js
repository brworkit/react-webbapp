import React, { useEffect } from 'react'

import DefaultButton from '../DefaultButton/DefaultButton'

const Cockpit = props => {

    useEffect(() => {
        console.log("useEffect");

        return () => {
            console.log("useEffect clean up");
        }
    }, [])

    return (              
        <DefaultButton onClick={props.toggleShowList}>Show List</DefaultButton>
    )
}


export default React.memo(Cockpit);