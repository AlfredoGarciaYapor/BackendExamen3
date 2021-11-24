const mongoose = require('mongoose');

const citasSchema = new mongoose.Schema(
    {
        date:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required:true
        },
        businessId:{
            type: Number,
            required: true
        },
        businessName:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        userName:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required: false
        },
    }
);

const Cita = mongoose.model('Cita', citasSchema);

module.exports = {
    Cita
};