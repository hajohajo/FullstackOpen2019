import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} exercises={props.exercises[0]}/>
            <Part part={props.parts[1]} exercises={props.exercises[1]}/>
            <Part part={props.parts[2]} exercises={props.exercises[2]}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    )
}

const App = () => {
    const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
    const exercises = [10, 7, 14]
    const course = 'Half Stack application development'

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts} exercises={exercises}/>
            <Total exercises={exercises}/>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));