import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ good, medium, hard, total, average, positive }) => {
  if (good === 0 & medium === 0 & hard === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr><Statistic feedback="good" value={good} /></tr>
        <tr><Statistic feedback="medium" value={medium} /></tr>
        <tr><Statistic feedback="hard" value={hard} /></tr>
        <tr><Statistic feedback="total" value={total} /></tr>
        <tr><Statistic feedback="average" value= {average} /></tr>
        <tr><Statistic feedback="positive" value={positive + '%'} /></tr>
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
  const [good, setEasy] = useState(0)
  const [medium, setModerate] = useState(0)
  const [hard, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(good + 1)

  const handleModerateClick = () =>
    setModerate(medium + 1)

  const handleDifficultClick = () =>
    setDifficult(hard + 1)

    const total = good + medium + hard
    
    const average = ((good - hard) / total)

    const positive = (good / total) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="easy" />
      <Button handleClick={handleModerateClick} text="moderate" />
      <Button handleClick={handleDifficultClick} text="difficult" />
      <h1>statistics</h1>
      <Statistics good={good} medium={medium} hard={hard} total={total} average={average} positive={positive} />
    </>
  )
}

export default App