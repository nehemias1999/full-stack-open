
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const part_data = props.part_data
  return (
    <div>
      <Part part={part_data[0].part} exercises={part_data[0].exercises}/>
      <Part part={part_data[1].part} exercises={part_data[1].exercises}/>
      <Part part={part_data[2].part} exercises={part_data[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const course_data = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part_data={course_data}/>
      <Total total={course_data[0].exercises + course_data[1].exercises + course_data[2].exercises}/>
    </div>
  )
}

export default App