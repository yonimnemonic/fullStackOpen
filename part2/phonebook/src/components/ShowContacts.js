import React from 'react'



const ShowContacts = ({persons, filter, delUser})=>{
   

   if(filter.length === 0){
            return(
               <form>
               {persons.map( (name, i) => 
               
                  <p key={i}>{name.name}: {name.number} <button  onClick={ () => delUser(name.id)}> delete</button></p>
               
               )}
               </form>
            ) 
      }
       else if(filter.length === 1 ){
              return(
              
               <form key={filter[0].name}>
                  <p>{filter[0].name} : {filter[0].number} <button onClick={ () => delUser(filter[0].id)}>delete</button></p> 
               <br></br>
               </form>
             
               )
       }else{
         return(
            <form >
            {persons.map( (name, i) => 
            <p key={i} >{name.name}: {name.number} <button  onClick={ () => delUser(name.id)}>delete</button>
               </p>
             )}

             </form>
         ) 
       }
       
}

export default ShowContacts
