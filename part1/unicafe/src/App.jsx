
import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>
      {title}
    </h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({name, number}) => {
  return (
    <p>
      {name} {number}
    </p>
  )
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

  const total = (good + neutral + bad)

  const average = (good - bad) / total || 0;

  const positive = (good / total) * 100 || 0;

  return (
    <div>
      <Title title='give feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Title title='statistics'/>
      <Statistic name='good' number={good}/>
      <Statistic name='neutral' number={neutral}/>
      <Statistic name='bad' number={bad}/>
      <Statistic name='all' number={total}/>
      <Statistic name='average' number={average}/>
      <Statistic name='positive' number={positive + ' %'}/>
    </div>
  )
}

export default App
