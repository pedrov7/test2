import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Stationediter = () => {

    const [stations, setStations] = useState([]);
    const [status, setStatus] = useState([]);


    useEffect(() => {
       
        axios.get('http://localhost:8000/api/stations')
            .then(res => {
                setStations(res.data)
                if(setStatus){
                    // setStatus([])

                }
            })
    },[status])



    const handleOnClick = (id,statusStation) => {
        if(statusStation === 'available'){ 
            // setStatus('busy')                                  
             axios.put(`http://localhost:8000/api/station/status/${id}/busy`)  
             .then(res => {
                 setStatus([...status,res])
             })              

                
        }
        else if(statusStation  === 'busy'){
            // setStatus('available')
             axios.put(`http://localhost:8000/api/station/status/${id}/available`)
             .then(res => {
                setStatus([...status,res])
            })       
            
        }
        

    }

    return (

        <div className='row'>

            <Link className='btn btn-info mt-4' to={'/'}> Retornar</Link>

            {stations.length >0 && stations.map((item, index) =>
                
                    <div key={index} onClick={() => {handleOnClick(item._id,item.status)}} className="btn card text-center my-3 p-0 mx-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title={item.status} style={{ width: '18rem' }}>
                        <div className="card text-center" style={{ minHeight: '15rem ' }}>
                            <div className="card-header">{item.title}</div>
                            <div className="card-body">
                                <h5 className="card-title">{item.status}</h5>
                                <p className="card-text">{item.latitude}, {item.longitude}</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                            <div className="card-footer text-muted">
                                {item._id}   
                            </div>
                        </div>
                    </div>
              
            )}



        </div>





    )
}
