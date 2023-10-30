
const Header = ({ course }) => 
  <h1>
    {course}
  </h1>
 
const Total = ({ value }) => 
  <p>
    <b>
      total of {value} exercises  
    </b>
  </p>

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => {
  return (
    parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )
  )
}

const Course = ({ course }) => {
  const total = course.parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0); 

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total value={total}/>
    </div>
  )
}

export default Course