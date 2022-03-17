const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre Obligatorio']
    },
    address: {
        type: String,
        required: [true, 'Nombre Obligatorio']
    },
    phone:{
        type:Number,
        required:[true, 'Ingrese numero de telefono']
    },
    latitude:{
        type:Number,
        required:[true, 'Ingrese latitud']
    },
    longitude:{
        type:Number,
        required:[true, 'Ingrese longitud']
    }
}, { timestamps: true })


module.exports.Workshop = mongoose.model("Workshop", WorkshopSchema);