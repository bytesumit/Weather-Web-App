import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {
    const [data,setdata] = useState({ 
        city : "ndn",
        temp : "nkwhn",
        tempMax :"kfknhn",
        tempMin :"djmw",
        humidity : "cskchnw",
        weather :"kkccawjhj",
    });
    const app = (app)=>{
        setdata(app)
        
    }
  return (
    <div>
      <SearchBox app={app} />
      <InfoBox info={data} />
    </div>
  )
}

export default WeatherApp
