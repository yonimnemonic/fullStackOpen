
import React, { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { Notifications } from './components/Notifications';
import PersonForm from './components/PersonForm';
import ShowContacts from './components/ShowContacts';
import { addUser, deleteUser, getUser, updateUser } from './services/userServices';



const App = () => {
    
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newPhone, setNewPhone ] = useState('');
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
      phone: newPhone,
    }
    let nombre = persons.map( name => name.name);
    let phone = persons.map( phone => phone.phone);

    if (nombre.includes(newName) || phone.includes(newPhone)) {
      
       if(window.confirm(`${newName}${newPhone} is already added to phonebook, replace the old number with the new one?`)){

        const id = persons.find(person => person.name === newName).id;

        updateUser(id, newObject)
          .then(response => {
            console.log('response: ', response)
            console.log('User has been modified',response.data)
            setPersons(
              persons.map( persons => persons.id !== id ? persons  : newObject )
              )
              console.log('persons: ', persons)
            setNotification(`${newName} has been updated in your phonebook`);
            setNewName('') //element controlled by REACT 
            setNewPhone('') 
            setTimeout(() => {
              setNotification(null)
            }, 3000);        
    })
      .catch( error => {
        console.log('error: ', error); 
        setNotification(`[ERROR]${newName} could not be added to the phonebook`);
        setTimeout(() => {
          setNotification(null)
        }, 3000);
      });
  }
    } else {
    addUser(newObject)
          .then((response) => {
            setPersons(persons.concat(response.data))
            setNotification(`${newName} added to the phonebook`)
            setNewName('') //element controlled by REACT 
            setNewPhone('') 
          }).catch( error => {
            console.log(`[ERROR]adding ${newName} to the phonebook`)
            setNotification(`[ERROR] ${error.response.data.substring(128,293)}`)
            console.log(error.response)
            setNewName('') 
            setNewPhone('')

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
           console.log(response.data) 
           setNotification(`User has been deleted from notebook`)

          }).catch( error =>{
            console.log(error)
            setNotification(`[ERROR]${newName} has been removed from server`)
          })

    }
    
 }  
  const handleFilter = (event) => {
    
      let value = event.target.value;     
      let personFiltered =  persons.filter( person => person.name.toLowerCase().includes( value.toLowerCase() ))
      setFilter(personFiltered);
  }  
    
  const handleNewPerson = (event)=>{
        
     setNewName(event.target.value)
  
  }
  const handleNewNumber = (event)=>{
        
    setNewPhone(event.target.value) 
  
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications notification={notification}/>
      <Filter onChange={handleFilter} setFilter={setFilter} setPersons={setPersons}/>
      <PersonForm  persons={persons} personForm={personForm} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} newName={newName} newPhone={newPhone} />
      <h2>Numbers</h2>
      <ShowContacts persons={persons} filter={filter} delUser={delUser} />
      <br></br>
      <div>debugName: {newName}</div>
      <div>debugNumber: {newPhone}</div>
    </div>
  )
}

export default App