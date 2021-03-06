const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.shadow},{props.exercises}</p>
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
const App = () => {
  const course = 'Half Stack application development'
  const shadow1 = 'Fundamentals of React'
  const exercises1 = 10
  const shadow2 = 'Using props to pass data'
  const exercises2 = 7
  const shadow3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content  shadow={shadow1} exercises={exercises1} />
      <Content shadow={shadow2} exercises={exercises2} /> 
      <Content shadow={shadow3} exercises={exercises3} /> 
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App