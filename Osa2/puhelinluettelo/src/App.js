import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '+358401234567', id: 1},
        {name: 'Ada Lovelace', number: '050-99953205', id:2},
        {name: 'Joona Havukainen', number: '04043202223', id:3}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterCondition, setNewFilter] = useState('')

    const handleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterCondition = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
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


    var filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filterCondition.toLowerCase()))

    return (
        <div>
            {/*<div>debug: {persons.map(person => (person.name))}</div>*/}
            <h1>Phonebook</h1>
            <div>
                Filter shown persons with: <input value={filterCondition} onChange={handleFilterCondition}/>
            </div>
            <h2>Add new person</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNewName}/>
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNewNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {filteredPersons.map(person => <p key={person.id}>{person.name}, {person.number}</p>)}
        </div>
    )
}

export default App;
