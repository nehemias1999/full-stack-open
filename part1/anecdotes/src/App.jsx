import { useState } from 'react'

const AnecdoteLine = ({anecdote}) => {
  return (
    <p>
      {anecdote}
    </p>
  )
}

const AnecdoteVotes = ({votes}) => {
  return (
    <p>
      has {votes} votes
    </p>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const randomIndex = () => Math.floor(Math.random() * anecdotes.length)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState({index: 0, value: 0})

  const [selected, setSelected] = useState(randomIndex)

  const handleNextClick = () => {
    setSelected(
      randomIndex
    )
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    
    if(newVotes[selected] >= mostVoted.value) {
      setMostVoted({
        index: selected, 
        value: newVotes[selected]
      })
    }

    setVotes(newVotes)
  }

  console.log(mostVoted)

  return (
    <div>
      <AnecdoteLine anecdote={anecdotes[selected]}/>
      <AnecdoteVotes votes={votes[selected]}/>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleNextClick} text='next anecdote'/>
      <AnecdoteLine anecdote={anecdotes[mostVoted.index]}/>
      <AnecdoteVotes votes={votes[mostVoted.index]}/>
    </div>
  )
}

export default App
