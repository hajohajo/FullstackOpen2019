import React from 'react'

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Content = ({parts}) => {
    return (
        parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}>placeholder</Part>)
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Total = ({parts}) => {
    const total = parts.map(part => part.exercises).reduce((sum, value) => sum + value)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Course