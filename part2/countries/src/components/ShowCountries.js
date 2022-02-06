import React from  "react";

const ShowCountries = ( {countries, filter} )=>{

    console.log('filter en el componente ShowCountries', filter);
   
    if(filter.length >= 10){
        console.log('estoy en el primer if');
        return(
            <>
                We find: <p>Plese, select no more than 10 countries.</p> 
            </>
            
      )
  }else if(filter.length === 1  ){
		console.log('estoy en el segundo if');
		return(
					<div>
					
						We find: { filter.map( filter => 
							<>
								<h3 key={filter.name.common}>{filter.name.common}</h3>
								<p> Capital: {filter.capital}</p>
								<p> Population: {filter.population}</p>
								<h4>Spoken languages: </h4>
									{ <li>{Object.values(filter.languages)}</li> }	
								<p><img src={filter.flags.png} alt={filter.name.common}></img></p>
							</>
						 )}
					</div>
			 
		)
}else if(filter.length < 10 ){
      console.log('estoy en el segundo if');
      return(
            <div>
            
              We find: { filter.map( filter => <p key={filter.name.common}>{filter.name.common}</p> ) }
            
						</div>
         
      )
  } 
	else {
      console.log('estoy en el else');
      return(
          <>
         
          We find:<p>{countries.map( (res) =>  <p key={res.name.common}>{res.name.common}</p> )}</p>
          </>
      )
  }

}

export default ShowCountries;