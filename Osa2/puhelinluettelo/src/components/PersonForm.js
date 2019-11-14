import React from 'react'

const PersonForm = ({newPerson, handleNewName, handleNewNumber, addPerson}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newPerson.name} onChange={handleNewName}/>
            </div>
            <div>
                Number: <input value={newPerson.number} onChange={handleNewNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
