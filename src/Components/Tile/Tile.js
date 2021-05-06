import React, { useState, useEffect } from 'react';
import './tile.css'
import moment from 'moment';

const Tile = ({data}) => {

  return (
    <div className="tile">
      
      <div>{moment(data.dt_txt).format('dddd')}</div>
      <div>{moment(data.dt_txt).format('LT')}</div>
      <div></div>
    </div>
  )
}

export default Tile;