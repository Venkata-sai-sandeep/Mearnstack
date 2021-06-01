const course = 'Half Stack application development'
const shadow1 = 'Enterprice Programming'
const exercises1 = 18
const shadow2 = 'Object Oriented Programming'
const exercises2 = 17
const shadow3 = 'State of a component'
const exercises3 = 45
const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
const Content = () => {
  return(
    <div>
      <Part part={shadow1} exercises={exercises1}/>
      <Part part={shadow2} exercises={exercises2}/>
      <Part part={shadow3} exercises={exercises3}/>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App