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
        <tr><Statistic text="good" value={good} /></tr>
        <tr><Statistic text="medium" value={medium} /></tr>
        <tr><Statistic text="hard" value={hard} /></tr>
        <tr><Statistic text="total" value={total} /></tr>
        <tr><Statistic text="average" value= {average} /></tr>
        <tr><Statistic text="positive" value={positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <td>{text} {value}</td>
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