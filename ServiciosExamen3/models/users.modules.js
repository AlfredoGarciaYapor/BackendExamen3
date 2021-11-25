const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
    {
        businessId:{
            type: Number,
            required: true
        },
        businessName:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        userName:{
            type: String,
            required: true
        },
    }
);

const User = mongoose.model('User', usersSchema);

module.exports = {
    User
};