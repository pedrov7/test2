const { Stations } = require('../models/stations.model');

module.exports.createStation = (req, res) => {
    const { title, latitude, longitude, status } = req.body;

    Stations.create({
        title,
        latitude,
        longitude,
        status
    })
        .then(res => {
            res.json({ msg: "success!", title })
        })
        .catch(err => res.json(err))
}


module.exports.getStation = (req, res) => {
    Stations.find({})
        .then(station => {
            res.json(station)
        })
        .catch(err => res.json(err))
}

module.exports.updateStatus = (io) => (req, res) => {
    Stations.updateOne({ _id: req.params.id }, { status: req.params.status })
        .then(updateStation => {
            res.json(updateStation)
            io.emit('updateStatus', 'se actualizo el estado')
        })
        .catch(err => res.json(err))
}

module.exports.updateStation = (req, res) => {

    Stations.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json(err))
}



module.exports.deleteStation = (req, res) => {
    Stations.deleteOne({ _id: req.params.id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
}