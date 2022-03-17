import React, { useEffect, useState } from 'react'
import Map from './Map'
import axios from 'axios'
import credentialsMap from '../credentialsMap'


export const Stations = () => {
  const [chargingStation, setChargingStation] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/stations')
    .then(res => setChargingStation(res.data))
    .catch(err => console.log(err))
  }, [])
 
  return (
    <div>
         <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentialsMap.mapsKey}`}
          containerElement={<div style={{height: '400px'}}></div>}
          mapElement = {<div style={{height:'100%'}}></div>}
          loadingElement = {<p>Cargando...</p>}
          isMarkerShown
          chargingStation={chargingStation}
        />
    </div>
  )
}
