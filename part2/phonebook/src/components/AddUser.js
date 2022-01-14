import React from 'react'

const AddUser = (event, persons, setPersons,newName, setNewName)=>{
    event.preventDefault()

    setNewName(event.target.value)
    console.log(newName)
    const addPerson = {
      name: newName,
    }
 
    setPersons(persons.concat(addPerson))

    return(
        <p>{persons.map((name, i) => <li key={i}>{name.name}</li>)}<br></br></p>
    )
  }
  export default AddUser