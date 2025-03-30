import React, { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
const SearchBox = ({app}) => {
    const API_KEY = "your Api Key";
    const API_URl = "Your Api Url";

    const getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URl}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMax :jsonResponse.main.temp_max,
                tempMin :jsonResponse.main.temp_min,
                humidity : jsonResponse.main.humidity,
                weather : jsonResponse.weather[0].description,
            }
            return result;
        }catch(err){
            throw err;
        }
       
    }
    const [city ,setCity] = useState("");
    const [err ,setErr] = useState(false);
    const handleCity = (e)=>{
        setCity(e.target.value)
    };
    const handleSubmit = async (e)=>{
        try{ e.preventDefault();
            console.log(city);
            let res  =  await getWeatherInfo();
            app(res);
            setCity("");
            setErr(false)
        }catch(err){
            setErr(true)
        }
       
    }
  return (
    <div>
      <h3>Search For the Weather </h3>
      <form onSubmit={handleSubmit}>
      <TextField id="city"
      onChange={handleCity}
        label="City"
        variant="outlined"
        value={city}
         />
    &nbsp; &nbsp;

      <Button type='submit' variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </form>
      <p>{err && "No sun data exists"}</p>
    </div>
  )
}

export default SearchBox
