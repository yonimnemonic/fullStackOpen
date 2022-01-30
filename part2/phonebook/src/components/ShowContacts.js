import React from 'react'

const ShowContacts = ({persons})=>{


   return(
      <>
         <p>
            {persons.map((name, i) => <li key={i}>{name.name}: {name.number}</li>)}<br></br>
         </p>  
      </>
   )
}

export default ShowContacts
