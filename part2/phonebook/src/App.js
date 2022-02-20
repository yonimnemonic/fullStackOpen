
import React, { useEffect, useState } from 'react'
import { Filter } from './components/Filter';
import PersonForm from './components/PersonForm';
import ShowContacts from './components/ShowContacts';
import { addUser, getUser, updateUser, deleteUser } from './services/userServices';


const App = () => {
    
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState([]);
  
  useEffect( ()=>{
    getUser().then( (response)=>{
      setPersons(response.data)
    })
  }, []);
  
  const personForm = (event) => {

    event.preventDefault();

    const newObject = {
      name: newName,
      number: newNumber,
    }

    let nombre = persons.map( name => name.name);
    let numero = persons.map( numero => numero.number);

    if (nombre.includes(newName) || numero.includes(newNumber)) {

      if(window.confirm(`${newName}${newNumber} is already added to phonebook, replace the old number with the new one?`)){

        let id = persons[0].id;
        updateUser(id, newObject)
          .then(response => console.log('response data', response.data));
      }

    } else {

      addUser(newObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
        })

      setNewName(''); //element controlled by REACT 
      setNewNumber(''); //element controlled by REACT 
    }
  }
  //delete person
 const delUser = ( id )=>{

    deleteUser(id)
    .then( ( response ) => {
          console.log('response data en deluser', delUser);
          window.confirm( 'Delete ', response.data)
        })
  }
 
  
  const handleFilter = (event) => {
    
      let value = event.target.value;     
      let personFiltered =  persons.filter( person => person.name.toLowerCase().includes( value.toLowerCase() ))
      setFilter(personFiltered);
  }  
    
  const handleNewPerson = (event)=>{
        
     setNewName(event.target.value);
  
  }
  const handleNewNumber = (event)=>{
        
     setNewNumber(event.target.value); 
  
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter onChange={handleFilter} setFilter={setFilter} setPersons={setPersons}/>
    
      <PersonForm  persons={persons} personForm={personForm} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} newName={newName} newNumber={newNumber} />
 
      <h2>Numbers</h2>

      <ShowContacts persons={persons} filter={filter} delUser={delUser}/>


      <br></br>
      <div>debugName: {newName}</div>
      <div>debugNumber: {newNumber}</div>
      ...
    </div>
  )
}

export default App
