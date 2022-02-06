import './App.css';
import {Fragment, React, useEffect, useState} from 'react';
import axios from 'axios';
import ShowCountries from './components/ShowCountries';
import  Filter  from './components/Filter';
/*
1-Recibo los paises (axios) -OK
2-los meto en useState countries con setCountries -OK
3-Necesito un filtro -OK
4-Dentro del array de countries necesito filtrar -OK 
5-no mostrar más de 10 paises
6-Mostrar el filtro dinamicamente
*/
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
  console.log(e.target.value);
  let filter = e.target.value;
  const search = countries.filter( country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  console.log('valor del search',search);
  setFilter(search);
}


  return (
   <>
    <Filter countries={countries} filter={filter} onChange={handleFilteredCountries}/>
    <ShowCountries  countries={countries} filter={filter}/>
  
   </>
  );
}

export default App;
