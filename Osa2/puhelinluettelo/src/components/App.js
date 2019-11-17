import React, { useState, useEffect } from 'react';
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from '../services/persons'
import Notification from './Notification'


const App = () => {

    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterCondition, setNewFilter] = useState('')
    const [notificationMessage, setNotificationMessage] = useState(null)
    const [errorState, setErrorState] = useState(false)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

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
        if(!persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length+1
            }
            personService
                .create(personObject)
                .then(returnedPersons => {
                    setPersons(persons.concat(returnedPersons))
                    setNewName('')
                    setNewNumber('')
                    setNotificationMessage(`Added ${returnedPersons.name}`)
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000)
                })
        }else{
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const person = persons.find(person =>person.name.toLowerCase() === newName.toLowerCase())
                const changedPerson = {...person, number: newNumber}
                personService
                    .update(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                        setNotificationMessage(`Changed ${person.name}'s number`)
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000)

                    })
                    .catch(() => {
                        setErrorState(true)
                        setNotificationMessage(`Information of ${person.name} has already been removed from server`)
                        setTimeout(() => {
                            setNotificationMessage(null)
                            setErrorState(false)
                        }, 5000)
                        setPersons(persons.filter(p => p.id !== person.id))
                    })
            }
        }
    }

    const removePerson = id =>  {
        const person = persons.find(person => person.id === id)
        if(window.confirm(`Really remove ${person.name}`)) {
            personService
                .remove(id)
                .then( () => {
                    personService
                        .getAll()
                        .then(returnedPersons => {setPersons(returnedPersons)}
                )
                    setNotificationMessage(`Removed ${person.name}`)
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000)

                })
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
            <Notification message={notificationMessage} error={errorState}/>
            <Filter filterCondition={filterCondition} handleFilterCondition={handleFilterCondition} />
            <h2>Add new person</h2>
            <PersonForm newPerson={personObject()} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addPerson={addPerson}/>
            <h2>Numbers</h2>
            <Persons personList={persons} filterCondition={filterCondition} removePerson={removePerson}/>
        </div>
    )
}

export default App;
