
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    { name: 'Arto Hlas' },
    { name: 'Arto las' },
    { name: 'Art Hellas' },
    { name: 'Artllas' },
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewPerson = (event)=>{
        
     setNewName(event.target.value) 
  
  }

  const AddUser = (event)=>{

    event.preventDefault()
    
    for(let name of persons){
      
      if(name.name.includes(newName)){
        alert(`${newName} is already added to phonebook`)
        break
      }else{
        const addPerson = {
          name: newName,
        }
        setPersons(persons.concat(addPerson))
        
       }
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNewPerson} />
        </div>
        <div>
          <button type="submit" onClick={AddUser}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{persons.map((name, i) => <li key={i}>{name.name}</li>)}<br></br></p>
        {/* <AddUser onClick={event} persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName}/> */}
      <div>debug: {newName}</div>
      ...
    </div>
  )
}

export default App
