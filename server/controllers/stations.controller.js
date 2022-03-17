const { Stations } = require('../models/stations.model');

// const express = require('express');
// const cors = require('cors');
// const app = express();
  
//   const http = require('http');
//   const server = http.createServer(app);
//   const { Server } = require("socket.io");
//   const io = new Server(server,{cors: {
//     origin: "http://localhost:3000",
//     allowedHeaders: ["my-custom-header"],
//     credentials: true
//   }});


module.exports.createStation = (req, res) => {
    const {title, latitude, longitude,status } = req.body;

    Stations.create({
        title,
        latitude,
        longitude,
        status
    })
        // .save()
        .then(res => {
            res.json({ msg: "success!", title })
        })
        .catch(err => res.json(err))
}


module.exports.getStation = (req, res) => {

   




    Stations.find({})
        .then(station => {
            res.json(station)
            io.on('connection', socket => {
                console.log(socket.id)
                io.emit('message', { name: 'pedro', message:'' })
               
              })
        })
        .catch(err => res.json(err))
}


module.exports.updateStation = (req,res) => {

    Stations.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}



module.exports.deleteStation = (req, res) => {
    Stations.deleteOne({ _id: req.params.id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
}