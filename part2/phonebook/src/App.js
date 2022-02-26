
import React, { useEffect, useState } from 'react'
import { Filter } from './components/Filter';
import { Notifications } from './components/Notifications';
import PersonForm from './components/PersonForm';
import ShowContacts from './components/ShowContacts';
import { addUser, getUser, updateUser, deleteUser } from './services/userServices';



const App = () => {
    
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState([]);
  const [ notification, setNotification ] = useState(null);

  
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
          .then(response => {
           
            console.log('user  modified',response.data);
            setPersons(
              persons.map((persons) => (persons.id !== id ? persons : response.data))
            )
            console.log(persons)

          setNotification(`${newName} modified in the phonebook`);
            setNewName(''); 
            setNewNumber('');
            console.log(persons)
            setTimeout(() => {
              setNotification(null)
            }, 3000);            
            
          })
          .catch( error => {
            console.log('error: ', error); 
            setNotification(`[ERROR]${newName} has been removed from server`);
            
            setTimeout(() => {
              setNotification(null)
              setNewName(''); 
              setNewNumber('');
            }, 3000);
          });
      }

    } else {

      addUser(newObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNotification(`${newName} added to the phonebook`);
          setNewName(''); //element controlled by REACT 
          setNewNumber(''); //element controlled by REACT 
        }).catch( error => {
          console.log(`[ERROR]adding ${newName} to the phonebook`);
          console.log(error);
          setNewName(''); 
          setNewNumber('');

        })

      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
  }
//delete person
const delUser = ( id )=>{
    if(window.confirm( `User will be deleted` )){
      deleteUser(id)
      .then( ( response ) => {
           console.log(response.data); 
           setNotification(`User has been deleted from notebook`)

          }).catch( error =>{
            console.log(error);
            setNotification(`[ERROR]${newName} has been removed from server`);
          })

    }
    
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
      <Notifications notification={notification}/>

      <Filter onChange={handleFilter} setFilter={setFilter} setPersons={setPersons}/>
    
      <PersonForm  persons={persons} personForm={personForm} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} newName={newName} newNumber={newNumber} />
 
      <h2>Numbers</h2>

      <ShowContacts persons={persons} filter={filter} delUser={delUser} />

        


      <br></br>
      <div>debugName: {newName}</div>
      <div>debugNumber: {newNumber}</div>
    </div>
  )
}

export default App
