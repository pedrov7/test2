const WorkshopController = require('../controllers/workshop.controller');

module.exports = function(app){
    app.post('/api/workshop', WorkshopController.createWorkshop);
    app.get('/api/allworkshops', WorkshopController.getAllWorkshops);
    app.get('/api/workshop/:id',WorkshopController.getWorkshop);
    app.put('/api/workshop/:id', WorkshopController.updateWorkshop);
    app.delete('/api/workshop/:id', WorkshopController.deleteWorkshop);
}
