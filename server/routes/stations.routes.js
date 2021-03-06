const StationController = require('../controllers/stations.controller');
const { Stations } = require('../models/stations.model');
let prueba = false
module.exports = function (app, io) {
    app.post('/api/station', StationController.createStation);
    app.get('/api/stations', StationController.getStation);
    app.put('/api/station/:id', StationController.updateStation);
    app.delete("/api/station/:id", StationController.deleteStation);
    app.put('/api/station/status/:id/:status',StationController.updateStatus(io))
}