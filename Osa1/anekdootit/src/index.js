import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GetRandomIndex = (props) => {
    return Math.floor(Math.random() * props.numberOfAnecdotes)
}

const SelectAnecdote = ({setSelected}, {numberOfAnecdotes}) => {
    const ind = GetRandomIndex({numberOfAnecdotes})
    setSelected(ind)
}

const AddVote = ({selected}, {votes}, {setVotes}) => {

    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
}

const App = (props) => {
    const numberOfAnecdotes = props.anecdotes.length
    const initVotes = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(initVotes)

    let mostVotesIndex = votes.indexOf(Math.max(...votes))

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <p>
                <button onClick={() => SelectAnecdote({setSelected}, {numberOfAnecdotes})}>Get another anecdote</button>
                <button onClick={() => AddVote({selected},{votes}, {setVotes})}>Vote</button>
            </p>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[mostVotesIndex]}</p>
            <p>has {votes[mostVotesIndex]} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
