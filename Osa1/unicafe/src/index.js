import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <div>
                <p>
                    <button onClick={handleGoodClick}>Good</button>
                </p>
                <p>
                    <button onClick={handleNeutralClick}>Neutral</button>
                </p>
                <p>
                    <button onClick={handleBadClick}>Bad</button>
                </p>
            </div>
            <h1>Statistics</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));