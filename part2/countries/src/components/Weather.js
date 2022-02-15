import axios from 'axios';
import React, { useState, useEffect}from 'react';

export const Weather = ({filter,}) => {
    
    
    const [weather, setWeather] = useState([]);
    console.log('valor de weather en el render', weather);
    console.log('array length de weather', weather.length);
    
    
    useEffect(()=>{
        
        const APIK = process.env.REACT_APP_API_KEY;
        
        const params = {
            access_key : APIK,
            query : filter,
        };

        axios.get(`http://api.weatherstack.com/current`, { params })
        .then(response => {        
                setWeather( [response.data] ); 
           
        }).catch(err =>{
            console.log(err);
    })
        
        
    },[filter]); 

    if( weather.length === 0){

        return (
            
            <div>             
                <p>Loading...</p> 
        </div>
      )

    }else if( weather.length > 0){
   
            return (
                <>
                    <h3>Wheather in { weather[0].location.name } </h3>
                    <p>Temperature: { weather[0].current.temperature} Celcius</p> 
                    <img src={weather[0].current.weather_icons[0]} alt='forecast_image'></img>
                    <p>Wind: { weather[0].current.wind_speed } direcction: {weather[0].current.wind_dir}</p> 
                </>
                
             )

    }

}
