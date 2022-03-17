const StationController = require('../controllers/stations.controller');

module.exports = function(app){
    app.post('/api/station', StationController.createStation);
    app.get('/api/stations', StationController.getStation);
    app.delete("/api/station/:id",StationController.deleteStation)
}