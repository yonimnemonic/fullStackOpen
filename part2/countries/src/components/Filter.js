import React from 'react';

const Filter = ( { onChange } ) => {
  

return(
    <>
    <p>Find countries: <input onChange={onChange}></input></p>
    </>
)
};

export default Filter;