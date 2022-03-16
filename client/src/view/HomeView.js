import React from 'react'
import { Home } from '../components/Home'
import Map from '../components/Map'
import credentialsMap from '../credentialsMap'
export const HomeView = () => {
  return (
    <>
        <Home/>
        <Map 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentialsMap.mapsKey}`}
          containerElement={<div style={{height: '400px'}}></div>}
          mapElement = {<div style={{height:'100%'}}></div>}
          loadingElement = {<p>Cargando...</p>}
          isMarkerShown
         />
    </>
  )
}
