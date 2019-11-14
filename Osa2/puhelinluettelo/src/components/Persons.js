import React from 'react'


const Persons = ({personList, filterCondition}) => {
    var filteredPersons = personList.filter(person => person.name.toLowerCase().includes(filterCondition.toLowerCase()))
    return (
        <div>
            {filteredPersons.map(person => <p key={person.id}>{person.name}, {person.number}</p>)}
        </div>
    )
}

export default Persons