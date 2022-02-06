import React from 'react';

const Filter = ({countries, onChange, filter}) => {
  
console.log('filter en el componente', filter);

return(
    <>
    <p>Find countries: <input  onChange={onChange}></input></p>
    </>
)
};

export default Filter;