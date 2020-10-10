// Write your Character component here
import React from 'react'

 const Character = (props) => {
     const {character} = props
    return (
        <div className = 'container'>
            <p className = 'name'>{character.name}</p>
            <p className= 'status'>{character.status}</p>
            <p className= 'species'>{character.species}</p>
            <p className= 'type'>{character.type}</p>
        </div>
    )
}

export default Character

