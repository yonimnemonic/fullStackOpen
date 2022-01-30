import React from 'react';

const PersonForm = ({personForm, onSubmit, handleNewNumber, handleNewPerson, newName, newNumber})=>{


    return(

    <form onSubmit={personForm}>
        <h2>Add a New</h2>
        Name: <input onChange={handleNewPerson} value={newName} /><br/>
        Number: <input onChange={handleNewNumber}  value={newNumber}/>
        <button>add</button>
    </form>
    )
}

export default PersonForm;
