import React, {useState} from 'react'

const Person = ({ shadow }) => {
  return (
    <div>
      &nbsp;&nbsp;{shadow.content}

    </div>
  )
}

const App = (pro) => {
  const [ persons, setPersons ] = useState(pro.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event1) => {
    console.log(event1.target.value)
    setNewName(event1.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
  setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const namesToShow = persons
  
  
  return (
    <div>
      <h2>&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          &nbsp;name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          &nbsp;<button type="submit">add</button>
        </div>
      </form>
      <h2>&nbsp;&nbsp;Numbers</h2>
      {namesToShow.map(shadow =>
          <Person key={shadow.id} shadow={shadow} />
        )}
      

    </div>
  )
}

export default App