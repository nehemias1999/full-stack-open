
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

const Feedback = ({name, number}) => {
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

  return (
    <div>
      <Title title='give feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Title title='statistics'/>
      <Feedback name='good' number={good}/>
      <Feedback name='neutral' number={neutral}/>
      <Feedback name='bad' number={bad}/>
    </div>
  )
}

export default App
