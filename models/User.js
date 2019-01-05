const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        }
    },
    inTime: {
        type: Date,
        required: true
    },
    outTime: {
        type: Date,
        required: true
    },
    status: {
        type: Number,
        default: 0
    } // if location gets verified, then save the status as 1
});

module.exports = User = mongoose.model('user', UserSchema);