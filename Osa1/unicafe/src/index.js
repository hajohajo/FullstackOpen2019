import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GetAverage = ({good}, {bad}, {sum}) => {
    return (good-bad)/sum
}

const GetPositivePercentage = ({good}, {sum}) => {
    return good/sum*100 + "%"
}

const Statistics = ({good}, {neutral}, {bad}) => {
    const sum = good + neutral + bad
    if(sum>0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>All: {sum}</p>
                <p>Average: {GetAverage({good}, {bad}, {sum})}</p>
                <p>Positive: {GetPositivePercentage({good}, {sum})}</p>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given.</p>
            </div>
        )
    }
}

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
            {Statistics({good}, {neutral}, {bad})}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));