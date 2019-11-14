import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])

    const [newName, setNewName] = useState('')

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        if(!persons.map(person => person.name).includes(newName)) {
            const nameObject = {
                name: newName
            }
            console.log({newName})
            setPersons(persons.concat(nameObject))
            setNewName('')
            console.log({persons})
        }else{
            window.alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <div>
            {/*<div>debug: {persons.map(person => (person.name))}</div>*/}
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNewName}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons.map(person => <p>{person.name}</p>)}
        </div>
    )
}

export default App;
