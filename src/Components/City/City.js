import React, { useState, useEffect } from 'react';
import './city.css'

const City = ({data}) => {


  useEffect(() => {

  }, []);

  return (
    <div className="city-weather">
        <h1>{data.city.name}</h1>
    </div>
  )
}

export default City;