import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GetAverage = ({good}, {bad}, {sum}) => {
    console.log(sum)
    if(sum>0){
        return (good-bad)/sum
    }else{
        return "Not defined yet, input feedback first."
    }
}

const GetPositivePercentage = ({good}, {sum}) => {
    if(sum>0) {
        return good/sum + "%"
    }else{
        return "Not defined yet, input feedback first."
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

    let sum = good + neutral + bad

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
            <p>All: {sum}</p>
            <p>Average: {GetAverage({good}, {bad}, {sum})}</p>
            <p>Positive: {GetPositivePercentage({good}, {sum})}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));