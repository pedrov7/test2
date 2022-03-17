const { Stations } = require('../models/stations.model');

module.exports.createStation = (req, res) => {
    const {title, latitude, longitude } = req.body;

    Stations.create({
        title,
        latitude,
        longitude
    })
        // .save()
        .then(res => {
            res.json({ msg: "success!", title })
        })
        .catch(err => res.json(err))
}


module.exports.getStation = (req, res) => {
    Stations.find({})
        .then(res => res.json(res))
        .catch(err => res.json(err))
}

module.exports.deleteStation = (req, res) => {
    Stations.deleteOne({ _id: req.params.id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
}