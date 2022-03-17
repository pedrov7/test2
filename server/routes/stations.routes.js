const StationController = require('../controllers/stations.controller');
const { Stations } = require('../models/stations.model');
module.exports = function(app,io){
    app.post('/api/station', StationController.createStation);
    // app.get('/api/stations', StationController.getStation);
    app.get('/api/stations', function (req , res){
        console.log(io)
        io.on('connection', socket => {
            console.log(socket.id)
            io.emit('message', { name: 'pedro', message:'valla' })
           
          })
        Stations.find({})
        .then(station => {
            res.json(station)
            
        })
        .catch(err => res.json(err))
    });
    app.put('/api/station/:id', StationController.updateStation);
    app.delete("/api/station/:id",StationController.deleteStation)
}