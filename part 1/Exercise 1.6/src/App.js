import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ easy, moderate, difficult, }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={easy} /></tr>
        <tr><Statistic feedback="medium" value={moderate} /></tr>
        <tr><Statistic feedback="hard" value={difficult} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [easy, setEasy] = useState(0)
  const [moderate, setModerate] = useState(0)
  const [difficult, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(easy + 1)

  const handleModerateClick = () =>
    setModerate(moderate + 1)

  const handleDifficultClick = () =>
    setDifficult(difficult + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="good" />
      <Button handleClick={handleModerateClick} text="medium" />
      <Button handleClick={handleDifficultClick} text="hard" />
      <h1>statistics</h1>
      <Statistics easy={easy} moderate={moderate} difficult={difficult} />
    </>
  )
}

export default App