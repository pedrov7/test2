const {Workshop} = require('../models/workshop.model');

module.exports.createWorkshop = (req,res) =>{
    const {name,address} = req.body;

    Workshop.create({
        name,
        address
    })
    .then(res => res.json(res))
    .catch(err=>{
        res.status(400).json(err)
    })
}

module.exports.getAllWorkshops = (req,res) => {
    Workshop.find({})
        .then(res => res.json(res))
        .catch(err=>res.json(err))
}

module.exports.getWorkshop = (req,res) => {
    Workshop.findOne({_id:req.params.id})
        .then(res => {
            res.json(res)
        })
        .catch(err=>{
            res.status(400).send('Error Id no disponible en la base de datos')
        })
}

module.exports.updateWorkshop = (req,res) => {
    Workshop.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}

module.exports.deleteWorkshop = (req,res) => {
    Workshop.deleteOne({_id: req.params.id})
    .then(deleteProduct => res.json(deleteProduct))
    .catch(err => res.json(err))
}


