import React, { useState } from 'react';
import './city.css'
import Tile from '../Tile/Tile';

const City = ({data}) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  const handleClick = (e) => {
    if (e.target.value === 'back' && start) {
      setStart(start-10)
      setEnd(end-10)
    }
    if (e.target.value === 'forward' && end < data.list.length) {
      setStart(start+10)
      setEnd(end+10)
    }
  }

  return (
    <div className="city-weather" data-testid="city-test">
        <h1>{data.city.name}</h1>
        <button className="back-button" value="back" data-testid="back-button-test" onClick={handleClick}>{'<'}</button>
        {data.list.slice(start,end).map((el,i) => <Tile key={i} data={el} />)}
        <button className="forward-button" data-testid="forward-button-test" value="forward" onClick={handleClick}>{'>'}</button>
    </div>
  )
}

export default City;