const { Stations } = require('../models/stations.model');

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
        .then(station => res.json(station))
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