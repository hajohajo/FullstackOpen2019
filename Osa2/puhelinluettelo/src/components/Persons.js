import React from 'react'


const Persons = ({personList, filterCondition, removePerson}) => {
    var filteredPersons = personList.filter(person => person.name.toLowerCase().includes(filterCondition.toLowerCase()))
    return (
        <div>
            {filteredPersons.map(person => <p key={person.id}>{person.name}, {person.number} <button type={"button"} onClick={() => removePerson(person.id)}>remove</button></p>)}
        </div>
    )
}

export default Persons