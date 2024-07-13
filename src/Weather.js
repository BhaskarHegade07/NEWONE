import React, { useState } from "react";
import axios from 'axios'
import './weather.css'

const APIKey='GHtCBqb4YWub8UHeo44H2CHz7DFYShej'
function Weather() {

const[city,setCity]=useState("")
const[weatherdata,setweatherdata]=useState(null)
const[error,setError]=useState(null)

const handleSubmit=async()=>{
    try{
const response=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${APIKey}`)
setweatherdata(response.data);
setError(null);
    }
    catch(error){
     setError('failed to fetch the weather data');
     setweatherdata(null);
    }
};
// console.log(weatherdata)
//console.log(error)






    return (
        <>
        <div className='container'>
            <h1 className='title'>Search Weather Condition</h1>
            <div className='inputContainer'>
                <input type="text" placeholder="Enter City Name" className="input"
                onChange={(e)=>setCity(e.target.value)}/>
                <button className="button" onClick={handleSubmit}>Search</button>
            </div>
            {error&&<p className="error">{error}</p>}
            {weatherdata&&(
                <div className="weatherContainer">
                    <h2 className="subtitle">{weatherdata.location.name}</h2>
        <p className="temperature">Temperature:{weatherdata.data.values.temperature}<sup>o</sup>C</p>
        <p className="humidity">Humidity:{weatherdata.data.values.humidity}%</p>
        <p className="windspeed">Windspeed:{weatherdata.data.values.temperature}mph</p>
                </div>
            )}
        </div>
        </>
        
    )
}
export default Weather