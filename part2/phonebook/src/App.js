
import React, { useState } from 'react'
import { Filter } from './components/Filter';
import PersonForm from './components/PersonForm';
import ShowContacts from './components/ShowContacts';



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '21-6142521152' },
    { name: 'Arturo Reverte', number: '21-62521152' },
    { name: 'Meri Popins', number: '21-6122548452' },
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState([]);

  
  const personForm = (event)=>{
    
    event.preventDefault();
    
    for(let user of persons){
      
      if(user.name.includes(newName) || user.number.includes(newNumber)){
        
        alert(`${newName}${newNumber} is already added to phonebook`)
        break
        
      }else{
        const addPerson = {
          name: newName,
          number: newNumber,
        }
        setPersons(persons.concat(addPerson));

        setNewName(''); //element controlled by REACT 
        setNewNumber(''); //element controlled by REACT 
        
      }
    }
  }
  
  const handleFilter = (event) => {
    
    //

      console.log('valor lleno');
      setFilter(event.target.value);
      
      const regExpresion = new RegExp(filter, 'i');
      const personFiltered = () => persons.filter( person => person.name.match(regExpresion));
      setPersons(personFiltered);
    }  
    console.log(filter);
    
  
  
  const handleNewPerson = (event)=>{
        
     setNewName(event.target.value);
  
  }
  const handleNewNumber = (event)=>{
        
     setNewNumber(event.target.value); 
  
  }
  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={filter} onChange={handleFilter} setFilter={setFilter} setPersons={setPersons}  />
    
      <PersonForm  persons={persons} personForm={personForm} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} newName={newName} newNumber={newNumber} />
 
      <h2>Numbers</h2>

      <ShowContacts persons={persons}/>

      <div>debugName: {newName}</div>
      <div>debugNumber: {newNumber}</div>
      ...
    </div>
  )
}

export default App
