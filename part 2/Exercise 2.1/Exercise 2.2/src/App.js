import React from 'react'

const Header = ({ object }) => {
  return (
      <h2>{object.name}</h2>
  )
}

const Part = (prop) => {
  return (
      <p>
          {prop.part.name} {prop.part.exercises}
      </p>
  )
}

const Content = ({ object }) => {
  return (
      <div>
          {object.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Total = ({ object }) => {
const sum1=object.parts[0].exercises + object.parts[1].exercises + object.parts[2].exercises
return (
   <strong>total of {sum1} exercises</strong>
		
	);
}

const Course = ({ object }) => {
  return (
      <>
          <Header object={object} />
          <Content object={object} />
          <Total object={object} />
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <>
      
      {courses.map(object => <Course object={object} />)}
    </>
  )
}

export default App