
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '6142521152' },
    { name: 'Arturo Reverte', number: '62521152' },
    { name: 'Meri Popins', number: '6122548452' },
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState();
  const [ filter, setFilter ] = useState([]);

  const handleNewPerson = (event)=>{
        
     setNewName(event.target.value) 
  
  }
  const handleNewNumber = (event)=>{
        
     setNewNumber(event.target.value) 
  
  }

  const PersonForm = (event)=>{

    event.preventDefault()
    
    for(let user of persons){
      
      if(user.name.includes(newName) || user.number.includes(newNumber)){
        alert(`${newName}${newNumber} is already added to phonebook`)
        break
      }else{
        const addPerson = {
          name: newName,
          number: newNumber,
        }
        setPersons(persons.concat(addPerson))

        
       }
    }
  }
  
 const Filter = (event) => {
  
  //
   setFilter(event.target.value);
  
   const regExpresion = new RegExp(filter, 'i')
   const personFiltered = () => persons.filter( person => person.name.match(regExpresion));

   if(regExpresion.length === 0){
     setPersons()
   }else{
     setPersons(personFiltered);

   }

   console.log(filter)  
       
  }

  return (
    <div>
      <h2>Phonebook</h2>
        filter shown with <input onChange={Filter}></input>
        <p>We find: </p>
      <form onSubmit={PersonForm}>
          <h2>Add a New</h2>
          name: <input onChange={handleNewPerson} /><br/>
          number: <input onChange={handleNewNumber}/>
          <button>add</button>
      </form>
      <h2>Numbers</h2>
      <p>{persons.map((name, i) => <li key={i}>{name.name}: {name.number}</li>)}<br></br></p>
        {/* <AddUser onClick={event} persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName}/> */}
      <div>debugName: {newName}</div>
      <div>debugNumber: {newNumber}</div>
      ...
    </div>
  )
}

export default App
