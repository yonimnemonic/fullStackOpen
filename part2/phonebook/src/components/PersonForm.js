import React from 'react';

const PersonForm = ({personForm, handleNewNumber, handleNewPerson, newName, newPhone})=>{


    return(
    
    <form onSubmit={personForm}>
        <h2>Add a New</h2>
        Name: <input onChange={handleNewPerson} value={newName} /><br/>
        Number: <input onChange={handleNewNumber}  value={newPhone}/><br/>
        <button>add</button>
    </form>
    )
}

export default PersonForm;
