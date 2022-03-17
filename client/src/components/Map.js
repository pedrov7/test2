import React from 'react'
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps"
import mark1 from '../img/mark1.png'
import available from '../img/available.png'
const Map = ({isMarkerShown, chargingStation}) => {
    console.log(chargingStation)
    
    return (

        <>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: -0.18428460234541166, lng: -78.4846462360105 }}
            >
                {
                    isMarkerShown && 
                    chargingStation?.map((station,idx) =>    
                        
                            {
                            if(station.status === 'available'){
                                return (<Marker 
                                    icon={available} 
                                    key={idx} 
                                    position={{ lat: station.latitude, lng: station.longitude }} 
                                    title={station.title}
                                />)
                            }
                            else {
                                return (<Marker 
                                    icon={mark1} 
                                    key={idx} 
                                    position={{ lat: station.latitude, lng: station.longitude }} 
                                    title={station.title}
                                />) 
                            }
                })
                
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
