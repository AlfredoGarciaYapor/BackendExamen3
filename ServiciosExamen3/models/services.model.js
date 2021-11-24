const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema(
    {
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
        description:{
            type: String,
            required: true
        },
        requiredTime:{
            type: Number,
            required: true,
            default: 1
        },
        cost:{
            type: Number
        },
        image:{
            type: String,
            required: false
        },
    }
);

const Service = mongoose.model('Service', servicesSchema);

module.exports = {
    Service
};