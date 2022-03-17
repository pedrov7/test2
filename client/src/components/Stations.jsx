import React, { useEffect, useRef, useState } from 'react'
import Map from './Map'
import axios from 'axios'
import credentialsMap from '../credentialsMap'
import socket from './Socket'

export const Stations = () => {
  const [chargingStation, setChargingStation] = useState([])
  const [chat, setChat] = useState([])
  const [press, setPress] = useState(false)

  useEffect(()=>{
    socket.on('updateStatus', mensaje =>{
      setChat([...chat,mensaje])
      console.log('llego el mensaje')
    })
    return () => {socket.off()}
  },[])

  const renderChat = () => {
    return chat.map((mensaje, index) => (
      <div key={index}>
        <h3>
          <span>{mensaje}</span>
        </h3>
      </div>
    ))
  }
  function handlerOnClick() {
    axios.put('http://localhost:8000/api/station/status/62338661291920ad340f7848/busy')
    setPress(!press)
  }
  useEffect(() => {
    console.log('efect ge')
    axios.get('http://localhost:8000/api/stations')
      .then(res => setChargingStation(res.data))
      .catch(err => console.log(err))
  }, [chat])

  return (
    <div>
      {renderChat()}
      <button onClick={handlerOnClick}>press</button>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentialsMap.mapsKey}`}
        containerElement={<div style={{ height: '400px' }}></div>}
        mapElement={<div style={{ height: '100%' }}></div>}
        loadingElement={<p>Cargando...</p>}
        isMarkerShown
        chargingStation={chargingStation}
      />
    </div>
  )
}
