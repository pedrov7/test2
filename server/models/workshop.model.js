const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nombre Obligatorio']
    },
    address: {
        type: String,
        required: [true, 'Nombre Obligatorio']
    }
}, { timestamps: true })


module.exports.Workshop = mongoose.model("Workshop", WorkshopSchema);