const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: 
    { 
        type: String,
        trim: true,
        min: 3,
        max: 20,
        required: true
    },

    message:
    {
        type: String,
        trim: true,
        min: 1,
        max: 300,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)