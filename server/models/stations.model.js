const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({

    title:{
        type: String,
        required: [true, 'Name required']
    },
    latitude:{
        type: Number,
        required:[true,'Enter latitude']
    },
    longitude:{
        type: Number,
        required:[true, 'Enter longitude']
    },
    status:{
        type:String,
        required:[true, '']
    }

}, { timestamps: true })


module.exports.Stations = mongoose.model("Stations", StationSchema);