import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '+358401234567', id: 1}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }


    const addPerson = (event) => {
        event.preventDefault()
        if(!persons.map(person => person.name).includes(newName)) {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length+1
            }
            console.log({newName})
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
            console.log({persons})
        }else{
            window.alert(`${newName} is already added to phonebook`)
        }
    }

    return (
        <div>
            {/*<div>debug: {persons.map(person => (person.name))}</div>*/}
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNewName}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNewNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons.map(person => <p key={person.id}>{person.name}, {person.number}</p>)}
        </div>
    )
}

export default App;
