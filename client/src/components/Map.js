import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import mark1 from '../img/mark1.png'
const Map = (props) => {
    const chargingStation = [
        {
            title:'Station 1',
            lat: -0.195801,
            lng: -78.497409 
        },
        {
            title:'Station 2',
            lat: -0.1866689131407795,
            lng: -78.48223568626726 
        },
    ]
    return (
        <>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -0.18428460234541166, lng: -78.4846462360105 }}
            >
                {
                    props.isMarkerShown && 
                    chargingStation.map((station,idx) =>    
                        <Marker icon={mark1} key={idx} position={{ lat: station.lat, lng: station.lng }} title={station.title}/>)
                
                }
            </GoogleMap>

            
        </>

    )
  
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
