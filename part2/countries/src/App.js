import './App.css';
import {Fragment, React, useEffect, useState} from 'react';
import axios from 'axios';
import ShowCountries from './components/ShowCountries';
import  Filter  from './components/Filter';



function App() {

const [ countries, setCountries ] = useState([]);
const [ filter, setFilter] = useState([]);

useEffect(()=>{

  axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
          const data = response.data;
          setCountries(data);
        }
      )
},[]);

const handleFilteredCountries = (e)=>{

  let filter = e.target.value;
  const search = countries.filter( country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  setFilter(search);
}


  return (
   <>
    <Filter countries={countries} filter={filter} onChange={handleFilteredCountries} setFilter={setFilter} />
    <ShowCountries  countries={countries} filter={filter} setFilter={setFilter}  /> 
   </>
  );
}

export default App;
