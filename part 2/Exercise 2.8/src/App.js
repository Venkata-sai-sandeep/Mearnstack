import React, {useState} from 'react'

const Person = ({ shadow }) => {
  return (
    <div>
      
      &nbsp;&nbsp;{shadow.content} 
      &nbsp;&nbsp;{shadow.number}

    </div>
  )
}

const App = (pro) => {
  const [ persons, setPersons ] = useState(pro.persons)
  const [ newName, setNewName ] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = (event1) => {
    setNewName(event1.target.value)
  }
  const handleNumberChange = (event1) => {
    setNumber(event1.target.value)
  }

  const addName = (event1) => {
    event1.preventDefault()
    if ( persons.find(person=>person.content===newName ) ) 
    {
      window.alert(newName + ' is already added to phonebook');
    }
  else
  {
    const nameObject = 
    {
      content: newName,
      number: number,
      id: persons.length + 1,
    }
  
  setPersons(persons.concat(nameObject))
  }
  
    setNewName('')  
    setNumber('')  
  
  
  }
  const namesToShow = persons


 
  
  
  return (
    <div>
      <h2>&nbsp;&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
         &nbsp;&nbsp;&nbsp;name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  value={newName} onChange={handleNameChange}/><br />
          <br></br>&nbsp;&nbsp;&nbsp;number: &nbsp;&nbsp;&nbsp;&nbsp; <input type='tel' pattern="[0-9\-]+" value={number} onChange={handleNumberChange}/>
        </div>
        <div>
        <br></br>&nbsp;&nbsp;&nbsp;<button type="submit">add</button>
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