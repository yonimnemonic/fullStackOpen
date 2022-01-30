import React from 'react';

export const Filter = ({value, onChange}) => {
    
  
    return(
        <>
        filter shown with <input value={value} onChange={onChange} ></input>
        <p>We find: </p>
        </>
    )
  }

