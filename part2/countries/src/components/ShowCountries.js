import axios from "axios";
import {React, useState, useEffect} from  "react";
import { Weather } from '../components/Weather';

const ShowCountries = ( {countries, filter, setFilter} ) => {

          
    const handleClickButton = (e) =>{
        console.log('click', e.target.value);
        //cambiar el valor de filter countries   
    }
   
    if(filter.length >= 10){

        return(
            <>
                We find:
                { 
                filter.map( filter => 
                <p key={filter.name.common}>{filter.name.common} <button value={filter.name.common} onClick={ handleClickButton }>Show</button>
                </p>
                 ) 
                }
            </>     
      )
  }else if(filter.length === 1 ){
      return(
          <>
          
					<div>
					
						We find: { filter.map( filter => 
							<>
								<h3 key={filter.name.common}>{filter.name.common}</h3>
								<p> Capital: {filter.capital}</p>
								<p> Population: {filter.population} </p>
								<h4>Spoken languages: </h4>
									{ <li>{Object.values(filter.languages)}</li> }	
								<p><img src={filter.flags.png} alt={filter.name.common} width='200px'></img></p>
                                <Weather filter={filter.name.common}/>
							</>
						 )}
					</div>
                
            </>
			 
		)
}else if(filter.length < 10 && filter.length === 2){
     
      return(
            <div>
              We find: { filter.map( filter => <p key={filter.name.common}>{filter.name.common}</p> ) }   
			</div> 
      )
  } 
	else {
      
      return(
          <>
         	<p>We find more than 10 countries, please modify your query!!</p>
          </>
      )
  }

}

export default ShowCountries;