import React, {useState} from 'react'

const Person = ({ sort }) => {
  return (
    <div>
      &nbsp;&nbsp;{sort.content}

    </div>
  )
}

const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if ( persons.find(sort=>sort.content===newName ) ) 
    {
      window.alert(newName + ' is already added to phonebook');
    }
  else
  {
    const nameObject = 
    {
      content: newName,
      id: persons.length + 1,
    }
  
  setPersons(persons.concat(nameObject))
  }
  
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
      {namesToShow.map(sort =>
          <Person key={sort.id} sort={sort} />
        )}
      

    </div>
  )
}

export default App