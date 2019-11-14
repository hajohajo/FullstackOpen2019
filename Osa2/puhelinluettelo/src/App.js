import React, { useState } from 'react';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }else{
            window.alert(`${newName} is already added to phonebook`)
        }
    }

    const personObject = () => {
        return(
            {name: newName,
           number: newNumber,
           id: persons.length+1}
        )
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter filterCondition={filterCondition} handleFilterCondition={handleFilterCondition} />
            <h2>Add new person</h2>
            <PersonForm newPerson={personObject()} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addPerson={addPerson}/>
            <h2>Numbers</h2>
            <Persons personList={persons} filterCondition={filterCondition}/>
        </div>
    )
}

export default App;
