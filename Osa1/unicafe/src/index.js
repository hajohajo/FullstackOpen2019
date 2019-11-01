import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const GetAverage = ({good}, {bad}, {sum}) => {
    return (good-bad)/sum
}

const GetPositivePercentage = ({good}, {sum}) => {
    return good/sum*100 + "%"
}

const Statistic = (props) => {
    console.log(props.value)
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const Statistics = ({good}, {neutral}, {bad}) => {
    const sum = good + neutral + bad
    if(sum>0) {
        return (
            <div>
                <h1>Statistics</h1>
                <Statistic text="Good" value={good}/>
                <Statistic text="Neutral" value={neutral}/>
                <Statistic text="Bad" value={bad}/>
                <Statistic text="All" value={sum}/>
                <Statistic text="Average" value={GetAverage({good}, {bad}, {sum})}/>
                <Statistic text="Positive" value={GetPositivePercentage({good}, {sum})}/>
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

const Button = (counter, setter, text) => {
    const handleClick = () => setter(counter + 1)
    return (
        <p>
        <button onClick={handleClick}>{text}</button>
        </p>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <div>
                {Button(good, setGood, "Good")}
                {Button(neutral, setNeutral, "Neutral")}
                {Button(bad, setBad, "Bad")}
            </div>
            {Statistics({good}, {neutral}, {bad})}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));